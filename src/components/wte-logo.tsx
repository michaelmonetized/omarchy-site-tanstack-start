import { useEffect, useRef } from "react";
import { AsciiLogo, OMARCHY_ASCII } from "@/components/ascii-logo";
import { cn } from "@/lib/utils";

const WTE_WASM_URL = "/assets/js/wte/laseretch.wasm";
const EFFECT = "laseretch";
const FONT_WAIT_MS = 1000;

type Playback = {
  restart: () => Promise<void>;
  stop: () => void;
};

type PlaybackCtor = new (options: {
  canvas: HTMLCanvasElement;
  width: () => number;
  height: () => number;
  connected: () => boolean;
  input: () => string;
  effect: () => string;
  wasmUrl: () => ArrayBuffer;
  onFinished: () => void;
  frameRate: () => number;
}) => Playback;

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

async function loadWasm() {
  const response = await fetch(WTE_WASM_URL);
  if (!response.ok) {
    throw new Error(`laseretch wasm ${response.status}`);
  }
  return response.arrayBuffer();
}

async function loadCanvasPlayback(): Promise<PlaybackCtor> {
  const url = `${window.location.origin}/assets/js/wte/assets/playback-C457l4sF.js`;
  // Public runtime module. Vite must not rewrite this import.
  const mod = (await import(/* @vite-ignore */ url)) as Record<string, unknown>;
  for (const value of Object.values(mod)) {
    if (
      typeof value === "function" &&
      value.prototype != null &&
      typeof value.prototype.restart === "function" &&
      typeof value.prototype.stop === "function"
    ) {
      return value as PlaybackCtor;
    }
  }
  throw new Error("CanvasPlayback not found");
}

function afterFonts() {
  if (document.fonts?.ready == null) {
    return Promise.resolve();
  }
  return Promise.race([
    document.fonts.ready,
    new Promise<void>((resolve) => {
      window.setTimeout(resolve, FONT_WAIT_MS);
    }),
  ]);
}

function artSize(text: string) {
  const lines = text.replace(/^\n+/, "").replace(/\n+$/, "").split("\n");
  return {
    columns: Math.max(1, ...lines.map((line) => line.length)),
    rows: Math.max(1, lines.length),
  };
}

function asciiInk(pre: HTMLElement) {
  const range = document.createRange();
  range.selectNodeContents(pre);
  const ink = range.getBoundingClientRect();
  const box = pre.getBoundingClientRect();
  return {
    width: Math.max(1, ink.width),
    height: Math.max(1, ink.height),
    left: ink.left - box.left,
    top: ink.top - box.top,
  };
}

function gridFor(width: number, height: number, columns: number, rows: number) {
  const cell = Math.max(1, Math.floor(Math.min(width / columns, height / (rows * 2))));
  return { width: columns * cell, height: rows * cell * 2 };
}

function fitCanvas(canvas: HTMLCanvasElement, pre: HTMLElement) {
  const ink = asciiInk(pre);
  canvas.style.width = `${ink.width}px`;
  canvas.style.height = `${ink.height}px`;
  canvas.style.left = `${ink.left}px`;
  canvas.style.top = `${ink.top}px`;
  return ink;
}

export function WteLogo({
  active,
  onFinished,
  className,
}: {
  active: boolean;
  onFinished: () => void;
  className?: string;
}) {
  const preRef = useRef<HTMLPreElement>(null);
  const holderRef = useRef<HTMLSpanElement>(null);
  const finishedRef = useRef(false);

  useEffect(() => {
    if (!active) return;

    let cancelled = false;
    let playback: Playback | null = null;
    let stopWatching: (() => void) | null = null;
    let canvas: HTMLCanvasElement | null = null;

    const finish = () => {
      if (finishedRef.current) return;
      finishedRef.current = true;
      playback?.stop();
      canvas?.remove();
      if (!cancelled) onFinished();
    };

    if (typeof window === "undefined" || prefersReducedMotion()) {
      finish();
      return;
    }

    const pre = preRef.current;
    const holder = holderRef.current;
    if (!pre || !holder) {
      finish();
      return;
    }

    const fail = () => {
      playback?.stop();
      stopWatching?.();
      canvas?.remove();
      if (!cancelled) finish();
    };

    afterFonts()
      .then(() => Promise.all([loadWasm(), loadCanvasPlayback()]))
      .then(([wasmBytes, CanvasPlayback]) => {
        if (cancelled) return;
        const { columns, rows } = artSize(OMARCHY_ASCII);
        const ink = asciiInk(pre);
        if (ink.width < 8 || ink.height < 8) {
          fail();
          return;
        }

        canvas = document.createElement("canvas");
        canvas.setAttribute("aria-hidden", "true");
        canvas.className = "absolute block";
        canvas.style.background = "transparent";

        const grid = () => {
          const next = asciiInk(pre);
          return gridFor(next.width, next.height, columns, rows);
        };

        playback = new CanvasPlayback({
          canvas,
          width: () => grid().width,
          height: () => grid().height,
          connected: () => canvas != null && canvas.isConnected,
          input: () => OMARCHY_ASCII,
          effect: () => EFFECT,
          wasmUrl: () => wasmBytes,
          onFinished: () => {
            if (!cancelled) finish();
          },
          frameRate: () => 240,
        });

        const resize = () => {
          if (!canvas) return;
          fitCanvas(canvas, pre);
        };
        const observer = new ResizeObserver(resize);
        observer.observe(pre);
        stopWatching = () => observer.disconnect();

        holder.append(canvas);
        void playback
          .restart()
          .then(() => {
            if (!cancelled && canvas) fitCanvas(canvas, pre);
          })
          .catch(fail);
      })
      .catch((error: unknown) => {
        console.error("wte logo failed", error);
        fail();
      });

    return () => {
      cancelled = true;
      playback?.stop();
      stopWatching?.();
      canvas?.remove();
    };
  }, [active, onFinished]);

  return (
    <a
      href="/"
      aria-label="Omarchy"
      className={cn("pointer-events-auto relative mx-auto block w-full no-underline", className)}
    >
      <AsciiLogo
        className={cn(
          "relative w-full text-[calc(100cqw/44.25)] text-background mix-blend-multiply",
          active ? "opacity-100" : "opacity-0",
        )}
        ref={preRef}
      />
      <span
        ref={holderRef}
        className="pointer-events-none absolute inset-0 block mix-blend-screen"
        aria-hidden="true"
      />
    </a>
  );
}
