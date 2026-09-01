import { useCallback, useEffect, useRef, useState } from "react";
import { WteLogo } from "@/components/wte-logo";
import HomeVideos from "./videos";
import { cn } from "@/lib/utils";

const HERO_START = "/assets/images/bg/home/hero-start.jpeg";
const HERO_END = "/assets/images/bg/home/hero-end.jpeg";
const HERO_VIDEO = "/assets/video/quattro-first-boot.mp4";
const PLAY_FALLBACK_MS = 8000;
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
  const [videoGone, setVideoGone] = useState(false);
  const [etch, setEtch] = useState(false);
  const [showTitle, setShowTitle] = useState(false);
  const [showCopy, setShowCopy] = useState(false);
  const [showStrip, setShowStrip] = useState(false);

  const skipToEnd = useCallback(() => {
    endedRef.current = true;
    playingRef.current = false;
    setVideoGone(true);
    setEtch(true);
    setShowTitle(true);
    setShowCopy(true);
    setShowStrip(true);
  }, []);

  const finishVideo = useCallback(() => {
    if (endedRef.current) return;
    endedRef.current = true;
    setVideoGone(true);
    window.setTimeout(() => setEtch(true), 420);
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
    if (video.duration > 0 && video.currentTime >= video.duration - 0.2) {
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
    <header className="relative flex h-svh w-full flex-col bg-background pt-14 [clip-path:inset(0)] md:block md:pt-0">
      <img
        src={HERO_END}
        alt=""
        className="pointer-events-none absolute inset-0 size-full object-cover object-center"
        width={1920}
        height={1056}
        aria-hidden="true"
      />

      <div className="relative flex min-h-0 flex-1 items-center justify-center md:absolute md:inset-0">
        <div className="relative aspect-[1920/1056] h-auto w-full max-h-full max-w-full md:w-[min(100%,calc(100svh*1920/1056))]">
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
              "[transform:translateZ(0)] transition-opacity duration-700",
              videoGone ? "pointer-events-none opacity-0" : "opacity-100",
            )}
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
          >
            <source src={HERO_VIDEO} type="video/mp4" />
          </video>

          {etch ? (
            <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center mix-blend-screen">
              <div className={`${WORD_WIDTH} [container-type:inline-size]`}>
                <WteLogo active onFinished={onLogoFinished} />
              </div>
            </div>
          ) : null}
        </div>
      </div>

      <div className="relative z-10 shrink-0 px-4 py-3 text-center md:absolute md:inset-x-0 md:bottom-[22vh] md:px-8 md:py-0">
        <h1
          className={cn(
            "font-heading mx-auto max-w-3xl text-sm font-extrabold tracking-tight text-terminal-cyan drop-shadow-[0_2px_12px_rgba(0,0,0,0.55)] md:text-md",
            showTitle ? "animate-hero-copy" : "opacity-0",
          )}
        >
          Beautiful, Fun &amp; Opinionated Linux by{" "}
          <a href="https://dhh.dk" className="text-terminal-blue hover:underline">
            DHH
          </a>
        </h1>

        <p
          className={cn(
            "mx-auto mt-2 max-w-2xl text-xs text-pretty italic text-foreground drop-shadow-[0_2px_12px_rgba(0,0,0,0.55)] md:mt-3",
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
