import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { HOME_VIDEOS, type HomeVideo } from "@/lib/videos";
import { cn } from "@/lib/utils";

function PlayMark() {
  return (
    <span className="absolute inset-0 flex items-center justify-center bg-black/30 transition-colors group-hover:bg-black/10">
      <span className="flex size-5 items-center justify-center bg-green text-background sm:size-9">
        <svg viewBox="0 0 24 24" className="size-3 fill-current sm:size-4" aria-hidden="true">
          <path d="M8 5v14l11-7z" />
        </svg>
      </span>
    </span>
  );
}

export default function HomeVideos({
  visible = true,
  className,
}: {
  visible?: boolean;
  className?: string;
}) {
  const [active, setActive] = useState<HomeVideo | null>(null);

  return (
    <>
      <div
        className={cn(
          "z-20",
          visible ? "animate-filmstrip" : "pointer-events-none opacity-0 md:translate-y-full",
          className ?? "absolute inset-x-0 bottom-0",
        )}
      >
        <div className="flex gap-px bg-border p-px">
          {HOME_VIDEOS.map((video) => (
            <button
              key={video.id}
              type="button"
              className="group relative min-w-0 flex-1 overflow-hidden bg-black"
              onClick={() => setActive(video)}
              aria-label={`Play: ${video.title}`}
            >
              <img
                src={video.poster}
                alt={video.alt}
                width={1280}
                height={720}
                className="aspect-video h-auto w-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <PlayMark />
            </button>
          ))}
        </div>
      </div>

      <Dialog open={active != null} onOpenChange={(open) => !open && setActive(null)}>
        <DialogContent
          className="w-[min(96vw,64rem)] max-w-none rounded-none p-0 sm:max-w-none"
          showCloseButton
        >
          {active ? (
            <>
              <DialogHeader className="sr-only">
                <DialogTitle>{active.title}</DialogTitle>
                <DialogDescription>{active.alt}</DialogDescription>
              </DialogHeader>
              <div className="aspect-video w-full bg-black">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${active.id}?autoplay=1`}
                  title={active.title}
                  className="h-full w-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </>
  );
}
