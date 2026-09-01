import { useEffect, useRef, useState } from "react";
import { OMARCHY_ASCII } from "@/components/ascii-logo";
import { cn } from "@/lib/utils";

const WTE_WASM_URL = "/assets/js/wte/laseretch.wasm";
const EFFECT = "laseretch";
const ART_COLUMNS = 81;
const ART_ROWS = 10;
const CELL_ASPECT = 2;
const FONT_WAIT_MS = 1000;
const CANVAS_FADE_MS = 700;

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

function nativeGrid(host: HTMLElement) {
  const box = host.getBoundingClientRect();
  const cell = Math.max(
    1,
    Math.floor(Math.min(box.width / ART_COLUMNS, box.height / (ART_ROWS * CELL_ASPECT))),
  );
  return { width: cell * ART_COLUMNS, height: cell * ART_ROWS * CELL_ASPECT };
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
  const [etched, setEtched] = useState(false);
  const finishedRef = useRef(false);

  useEffect(() => {
    if (!active) return;

    const finish = () => {
      if (finishedRef.current) return;
      finishedRef.current = true;
      setEtched(true);
      window.setTimeout(onFinished, CANVAS_FADE_MS);
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

    let cancelled = false;
    let playback: Playback | null = null;
    let stopWatching: (() => void) | null = null;
    let canvas: HTMLCanvasElement | null = null;

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
        const box = pre.getBoundingClientRect();
        if (box.width < 8 || box.height < 8) {
          fail();
          return;
        }

        const native = nativeGrid(pre);
        canvas = document.createElement("canvas");
        canvas.setAttribute("aria-hidden", "true");
        canvas.className = "absolute top-0 left-0 block";
        canvas.style.width = `${box.width}px`;
        canvas.style.height = `${box.height}px`;

        playback = new CanvasPlayback({
          canvas,
          width: () => native.width,
          height: () => native.height,
          connected: () => canvas != null && canvas.isConnected,
          input: () => OMARCHY_ASCII.replace(/^\n/, "").replace(/\n+$/, ""),
          effect: () => EFFECT,
          wasmUrl: () => wasmBytes,
          onFinished: () => {
            if (!cancelled) finish();
          },
          frameRate: () => 240,
        });

        const resize = () => {
          if (!canvas) return;
          const next = pre.getBoundingClientRect();
          if (next.width < 1 || next.height < 1) return;
          canvas.style.width = `${next.width}px`;
          canvas.style.height = `${next.height}px`;
        };
        const observer = new ResizeObserver(resize);
        observer.observe(pre);
        stopWatching = () => observer.disconnect();

        holder.append(canvas);
        void playback.restart().catch(fail);
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
      className={cn(
        "pointer-events-auto relative mx-auto block w-full text-green no-underline",
        className,
      )}
    >
      <pre
        ref={preRef}
        className={cn(
          "m-0 block w-full p-0 text-center font-mono text-[length:calc(100cqw/45)] leading-[1.05] tracking-[-0.05em] whitespace-pre text-green select-none",
          "transition-opacity duration-700",
          !active || !etched ? "opacity-0" : "opacity-100",
        )}
      >
        {OMARCHY_ASCII}
      </pre>
      <span
        ref={holderRef}
        className={cn(
          "pointer-events-none absolute inset-0 block overflow-hidden transition-opacity duration-700",
          etched ? "opacity-0" : "opacity-100",
        )}
        aria-hidden="true"
      />
    </a>
  );
}
