import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { BookOpenIcon, DownloadIcon, GitForkIcon } from "lucide-react";
import { WteLogo } from "@/components/wte-logo";
import HomeVideos from "./videos";
import { GITHUB_URL } from "@/lib/site";
import { cn } from "@/lib/utils";

const HERO_START = "/assets/images/bg/home/hero-start.jpeg";
const HERO_END = "/assets/images/bg/home/hero-end.jpeg";
const HERO_VIDEO = "/assets/video/quattro-first-boot.mp4";
const PLAY_FALLBACK_MS = 8000;
const VIDEO_CUT_S = 2.85;
const VIDEO_FADE_MS = 2000;
const WORD_WIDTH = "w-[73.8%]";

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

function armInlinePlayback(video: HTMLVideoElement) {
  video.muted = true;
  video.defaultMuted = true;
  video.playsInline = true;
  video.setAttribute("muted", "");
  video.setAttribute("playsinline", "");
  video.setAttribute("webkit-playsinline", "true");
}

export default function HomeHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const endedRef = useRef(false);
  const playingRef = useRef(false);
  const [videoFade, setVideoFade] = useState(false);
  const [videoOff, setVideoOff] = useState(false);
  const [etch, setEtch] = useState(false);
  const [showTitle, setShowTitle] = useState(false);
  const [showCopy, setShowCopy] = useState(false);
  const [showStrip, setShowStrip] = useState(false);

  const skipToEnd = useCallback(() => {
    endedRef.current = true;
    playingRef.current = false;
    setVideoFade(true);
    setVideoOff(true);
    setEtch(true);
    setShowTitle(true);
    setShowCopy(true);
    setShowStrip(true);
  }, []);

  const finishVideo = useCallback(() => {
    if (endedRef.current) return;
    endedRef.current = true;
    setVideoFade(true);
    window.setTimeout(() => setEtch(true), 420);
    window.setTimeout(() => setVideoOff(true), VIDEO_FADE_MS + 80);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion()) {
      skipToEnd();
      return;
    }

    const video = videoRef.current;
    if (!video) return;

    armInlinePlayback(video);

    const tryPlay = () => {
      if (endedRef.current || playingRef.current) return;
      void video.play().then(
        () => {
          playingRef.current = true;
        },
        () => {
          /* Autoplay blocked (Low Power Mode). Gesture handler retries. */
        },
      );
    };

    tryPlay();
    video.addEventListener("canplay", tryPlay);
    video.addEventListener("loadeddata", tryPlay);
    video.addEventListener("loadedmetadata", tryPlay);

    const fallback = window.setTimeout(() => {
      if (endedRef.current || playingRef.current) return;
      if (video.paused) skipToEnd();
    }, PLAY_FALLBACK_MS);

    const onGesture = () => {
      if (endedRef.current) return;
      if (!playingRef.current && video.paused) {
        void video.play().then(() => {
          playingRef.current = true;
        }, skipToEnd);
      }
    };
    window.addEventListener("touchstart", onGesture, { passive: true });
    window.addEventListener("pointerdown", onGesture);

    return () => {
      window.clearTimeout(fallback);
      video.removeEventListener("canplay", tryPlay);
      video.removeEventListener("loadeddata", tryPlay);
      video.removeEventListener("loadedmetadata", tryPlay);
      window.removeEventListener("touchstart", onGesture);
      window.removeEventListener("pointerdown", onGesture);
    };
  }, [skipToEnd]);

  const onTimeUpdate = () => {
    const video = videoRef.current;
    if (!video || endedRef.current) return;
    if (video.currentTime >= VIDEO_CUT_S) {
      finishVideo();
    }
  };

  const onLogoFinished = useCallback(() => {
    setShowTitle(true);
    window.setTimeout(() => setShowCopy(true), 280);
    window.setTimeout(() => setShowStrip(true), 560);
  }, []);

  const frameClass = "absolute inset-0 size-full object-cover object-center";

  return (
    <header className="bg-background relative flex h-svh w-full flex-col pt-14 [clip-path:inset(0)] md:block md:pt-0">
      <img
        src={HERO_END}
        alt=""
        className="pointer-events-none absolute inset-0 size-full scale-110 object-cover object-center blur-2xl"
        width={1920}
        height={1056}
        aria-hidden="true"
      />

      <div className="relative flex min-h-0 flex-1 items-center justify-center md:absolute md:inset-0">
        <div className="relative aspect-[1920/1056] h-auto max-h-full w-full max-w-full [container-type:inline-size] md:w-[min(100%,calc(100svh*1920/1056))]">
          <img
            src={HERO_END}
            alt=""
            className={frameClass}
            width={1920}
            height={1056}
            aria-hidden="true"
          />
          <video
            ref={videoRef}
            className={cn(
              frameClass,
              "[transform:translateZ(0)] transition-opacity ease-out",
              videoFade ? "opacity-0" : "opacity-100",
              videoOff && "hidden",
            )}
            style={{ transitionDuration: `${VIDEO_FADE_MS}ms` }}
            poster={HERO_START}
            width={1920}
            height={1056}
            autoPlay
            muted
            playsInline
            preload="auto"
            controls={false}
            disablePictureInPicture
            disableRemotePlayback
            onPlaying={() => {
              playingRef.current = true;
            }}
            onEnded={finishVideo}
            onTimeUpdate={onTimeUpdate}
            onError={skipToEnd}
            onTransitionEnd={(event) => {
              if (event.propertyName === "opacity" && event.target === videoRef.current) {
                setVideoOff(true);
              }
            }}
          >
            <source src={HERO_VIDEO} type="video/mp4" />
          </video>

          {etch ? (
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <div className={WORD_WIDTH}>
                <WteLogo active onFinished={onLogoFinished} />
              </div>
            </div>
          ) : null}
        </div>
      </div>

      <div className="relative z-10 shrink-0 px-4 py-3 text-center md:absolute md:inset-x-0 md:bottom-[22vh] md:px-8 md:py-0">
        <h1
          className={cn(
            "font-heading text-terminal-cyan md:text-md mx-auto max-w-3xl text-sm font-extrabold tracking-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.55)]",
            showTitle ? "animate-hero-copy" : "opacity-0",
          )}
        >
          Beautiful, Fun &amp; Opinionated Linux by{" "}
          <a href="https://dhh.dk" className="text-terminal-blue hover:underline">
            DHH
          </a>
        </h1>

        <div
          className={cn(
            "mt-4 flex flex-wrap items-center justify-center gap-2",
            showTitle ? "animate-hero-copy" : "opacity-0",
          )}
        >
          <Link
            to="/install"
            className="border-green bg-green text-background hover:bg-success inline-flex items-center gap-1.5 border px-3 py-1.5 text-xs font-bold no-underline"
          >
            <DownloadIcon className="size-3.5" aria-hidden="true" />
            Install
          </Link>
          <Link
            to="/manual"
            className="border-border bg-background/80 text-foreground hover:bg-muted inline-flex items-center gap-1.5 border px-3 py-1.5 text-xs font-bold no-underline backdrop-blur-sm"
          >
            <BookOpenIcon className="size-3.5" aria-hidden="true" />
            Learn
          </Link>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="border-border bg-background/80 text-foreground hover:bg-muted inline-flex items-center gap-1.5 border px-3 py-1.5 text-xs font-bold no-underline backdrop-blur-sm"
          >
            <GitForkIcon className="size-3.5" aria-hidden="true" />
            Fork
          </a>
        </div>

        <p
          className={cn(
            "text-foreground mx-auto mt-2 max-w-2xl text-xs text-pretty italic drop-shadow-[0_2px_12px_rgba(0,0,0,0.55)] md:mt-3",
            showCopy ? "animate-hero-copy" : "opacity-0",
          )}
        >
          The malleable OS for the age of agents. Where you can vibe your way through every
          alteration, tweak, and desire.{" "}
          <a href="https://omarchs.fyi" className="text-foreground not-italic">
            Be the Omarch
          </a>{" "}
          and command your agent!
        </p>
      </div>

      <HomeVideos
        visible={showStrip}
        className="relative shrink-0 md:absolute md:inset-x-0 md:bottom-0"
      />
    </header>
  );
}
