import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { DATA } from "@/data/resume";

export default function ContactSection() {
  return (
    <div className="relative rounded-xl border p-10">
      <div className="absolute left-1/2 top-0 z-10 -translate-x-1/2 -translate-y-1/2 rounded-xl border bg-primary px-4 py-1">
        <span className="text-sm font-medium text-background">Contact</span>
      </div>
      <div className="absolute inset-x-0 top-0 h-1/2 overflow-hidden rounded-xl">
        <FlickeringGrid
          className="h-full w-full"
          squareSize={2}
          gridGap={2}
          style={{
            maskImage: "linear-gradient(to bottom, black, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
          }}
        />
      </div>
      <div className="relative flex flex-col items-center gap-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          Get in Touch
        </h2>
        <p className="mx-auto max-w-lg text-balance text-muted-foreground">
          Want to chat? Just shoot me a dm{" "}
          <a
            href={DATA.contact.social.LinkedIn.url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm text-blue-500 underline underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            with a direct question on LinkedIn
          </a>{" "}
          and I&apos;ll respond whenever I can. I will ignore all soliciting.
        </p>
      </div>
    </div>
  );
}
