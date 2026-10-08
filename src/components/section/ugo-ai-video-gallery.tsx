"use client";

import { useState } from "react";
import { Play } from "lucide-react";

const defaultVideo = {
  title: "Zoom group AI session",
  src: "/ugo-ai-session.mp4",
  poster: "/ugo-ai-session.png",
};

const videos = [
  {
    title: "Puspa on learning AI",
    src: "/ugo-ai-video-1.mp4",
    poster: "/ugo-ai-video-1-preview.jpg",
  },
  {
    title: "AI and student growth",
    src: "/ugo-ai-video-2.mp4",
    poster: "/ugo-ai-video-2-preview.jpg",
  },
  {
    title: "AI in practice",
    src: "/ugo-ai-video-3.mp4",
    poster: "/ugo-ai-video-3-preview.jpg",
  },
];

export function UgoAiVideoGallery() {
  const [activeVideo, setActiveVideo] = useState(defaultVideo);

  return (
    <section aria-label="U-GO AI video gallery" className="p-4 sm:p-6">
      <div className="grid gap-4 lg:grid-cols-[minmax(0,1.65fr)_minmax(13rem,0.8fr)]">
        <div className="flex min-w-0 flex-col items-center">
          <div className="flex min-h-64 w-full items-center justify-center overflow-hidden rounded-xl bg-muted/30">
            <video
              key={activeVideo.src}
              src={activeVideo.src}
              poster={activeVideo.poster}
              autoPlay
              loop
              muted
              controls
              playsInline
              preload="metadata"
              aria-label={activeVideo.title}
              className="block h-auto max-h-[18rem] w-auto max-w-full object-contain"
            >
              Your browser does not support embedded videos.
            </video>
          </div>
          <p className="mt-3 text-center text-sm font-semibold text-foreground underline decoration-primary/50 decoration-2 underline-offset-4">
            See what Puspa says about AI
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-1">
          {videos.map((video) => {
            const selected = video.src === activeVideo.src;
            return (
              <button
                key={video.src}
                type="button"
                onMouseEnter={() => setActiveVideo(video)}
                onFocus={() => setActiveVideo(video)}
                onClick={() => setActiveVideo(video)}
                aria-pressed={selected}
                aria-label={`Play ${video.title}`}
                className={`group flex min-w-0 items-center gap-3 rounded-xl border p-2 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                  selected
                    ? "border-primary bg-primary/5"
                    : "border-border bg-background hover:border-primary/60"
                }`}
              >
                <span className="relative block aspect-video w-24 shrink-0 overflow-hidden rounded-lg bg-black sm:w-28">
                  <img
                    src={video.poster}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                  <span className="absolute inset-0 flex items-center justify-center bg-black/20 text-white transition-colors group-hover:bg-black/35">
                    <Play className="size-5 fill-current" aria-hidden="true" />
                  </span>
                </span>
                <span className="min-w-0 text-xs font-medium leading-snug sm:text-sm">
                  {video.title}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
