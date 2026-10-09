"use client";

import { useState } from "react";
import { Download, Play } from "lucide-react";
import { OpenAndDownloadLink } from "@/components/section/certificate-download-link";

type GalleryVideo = {
  type: "video";
  title: string;
  src: string;
  poster: string;
};

type GalleryCertificate = {
  type: "certificate";
  title: string;
  src: string;
};

type GalleryItem = GalleryVideo | GalleryCertificate;

const defaultVideo: GalleryVideo = {
  type: "video",
  title: "Zoom group AI session",
  src: "/ugo-ai-session.mp4",
  poster: "/ugo-ai-session.png",
};

const videos: GalleryVideo[] = [
  {
    type: "video",
    title: "Puspa on learning AI",
    src: "/ugo-ai-video-1.mp4",
    poster: "/ugo-ai-video-1-preview.jpg",
  },
  {
    type: "video",
    title: "AI and student growth",
    src: "/ugo-ai-video-2.mp4",
    poster: "/ugo-ai-video-2-preview.jpg",
  },
  {
    type: "video",
    title: "AI in practice",
    src: "/ugo-ai-video-3.mp4",
    poster: "/ugo-ai-video-3-preview.jpg",
  },
];

const aiCertificate: GalleryCertificate = {
  type: "certificate",
  title: "U-GO AI Certificate",
  src: "/ugo-ai-certificate.pdf",
};

export function UgoAiVideoGallery() {
  const [activeItem, setActiveItem] = useState<GalleryItem>(defaultVideo);

  function playOrShow(item: GalleryItem) {
    setActiveItem(item);
    if (item.type === "certificate") {
      window.open(item.src, "_blank", "noopener,noreferrer");
      const downloadLink = document.createElement("a");
      downloadLink.href = item.src;
      downloadLink.download = "Puspa-Shukla-U-GO-AI-Certificate.pdf";
      document.body.appendChild(downloadLink);
      downloadLink.click();
      downloadLink.remove();
    }
  }

  return (
    <section aria-label="U-GO AI video gallery" className="p-4 sm:p-6">
      <div className="grid gap-4 lg:grid-cols-[minmax(0,1.65fr)_minmax(13rem,0.8fr)]">
        <div className="flex min-w-0 flex-col items-center">
          <div className="flex aspect-video w-full items-center justify-center overflow-hidden rounded-xl border border-border bg-white">
            {activeItem.type === "video" ? (
              <video
                key={activeItem.src}
                src={activeItem.src}
                poster={activeItem.poster}
                autoPlay
                loop
                muted
                controls
                playsInline
                preload="metadata"
                aria-label={activeItem.title}
                className="block h-full max-h-[24rem] w-full object-contain"
              >
                Your browser does not support embedded videos.
              </video>
            ) : (
              <iframe
                key={activeItem.src}
                src={`${activeItem.src}#toolbar=0&navpanes=0&view=FitH`}
                title={activeItem.title}
                className="h-full min-h-64 w-full bg-white sm:min-h-80"
              />
            )}
          </div>
          {activeItem.type === "certificate" && (
            <OpenAndDownloadLink
              href={activeItem.src}
              filename="Puspa-Shukla-U-GO-AI-Certificate.pdf"
              ariaLabel="Open and download Puspa's U-GO AI certificate"
              className="mt-3 inline-flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-2 text-sm font-semibold text-primary transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Open and download certificate
              <Download className="size-4" aria-hidden="true" />
            </OpenAndDownloadLink>
          )}
          <p className="mt-3 text-center text-sm font-semibold text-foreground underline decoration-primary/50 decoration-2 underline-offset-4">
            See what Puspa says about AI
          </p>
        </div>
        <div
          className="grid grid-cols-2 gap-3 lg:grid-cols-1"
          onMouseLeave={() => setActiveItem(defaultVideo)}
        >
          {[...videos, aiCertificate].map((item) => {
            const selected = item.src === activeItem.src;
            return (
              <button
                key={item.src}
                type="button"
                onMouseEnter={() => setActiveItem(item)}
                onFocus={() => setActiveItem(item)}
                onClick={() => playOrShow(item)}
                aria-pressed={selected}
                aria-label={
                  item.type === "video"
                    ? `Play ${item.title}`
                    : `View and download ${item.title}`
                }
                className={`group flex min-w-0 items-center gap-3 rounded-xl border p-2 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                  selected
                    ? "border-primary bg-primary/5"
                    : "border-border bg-background hover:border-primary/60"
                }`}
              >
                <span className="relative flex aspect-video w-24 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-muted sm:w-28">
                  {item.type === "video" ? (
                    <>
                      <img
                        src={item.poster}
                        alt=""
                        className="h-full w-full object-cover"
                      />
                      <span className="absolute inset-0 flex items-center justify-center bg-black/20 text-white transition-colors group-hover:bg-black/35">
                        <Play className="size-5 fill-current" aria-hidden="true" />
                      </span>
                    </>
                  ) : (
                    <iframe
                      src={`${item.src}#toolbar=0&navpanes=0&view=Fit`}
                      title={`${item.title} preview`}
                      tabIndex={-1}
                      aria-hidden="true"
                      className="pointer-events-none h-full w-full bg-white"
                    />
                  )}
                </span>
                <span className="min-w-0 text-xs font-medium leading-snug sm:text-sm">
                  {item.title}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
