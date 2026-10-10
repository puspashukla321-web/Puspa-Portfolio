/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { DATA } from "@/data/resume";
import { Icons } from "@/components/icons";
import { OpenAndDownloadLink } from "@/components/section/certificate-download-link";
import { UgoAiVideoGallery } from "@/components/section/ugo-ai-video-gallery";
import {
  Timeline,
  TimelineItem,
  TimelineConnectItem,
} from "@/components/timeline";
import { ArrowUpRight, Award, Download, PlayCircle } from "lucide-react";

function getHackathonLinkMeta(label: string, href: string) {
  const normalized = `${label} ${href}`.toLowerCase();

  if (normalized.includes("youtube") || normalized.includes("youtu.be")) {
    return {
      icon: PlayCircle,
      text: label || "Watch Demo",
    };
  }

  if (normalized.includes("github")) {
    return {
      icon: Icons.github,
      text: label || "GitHub",
    };
  }

  return {
    icon: Icons.globe,
    text: label || "Visit Link",
  };
}

export default function HackathonsSection() {
  return (
    <section id="hackathons" className="overflow-hidden">
      <div className="flex min-h-0 flex-col gap-y-8 w-full">
        <div className="flex flex-col gap-y-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
            Recognition & community
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="font-display text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">
              Learning, leadership &amp; community
            </h2>
            <p className="max-w-md text-sm leading-6 text-muted-foreground sm:text-right">
              Opportunities to represent, mentor, and support scholars through
              technology.
            </p>
          </div>
        </div>
        <Timeline>
          {DATA.hackathonsAndEvents.map((hackathon) => {
            const isNepalRepresentative =
              hackathon.title === "U-GO Nepal Representative";
            const isRippleEffect =
              hackathon.title === "The Ripple Effect: U-GO Global Publication";
            const isUgoAiSession =
              hackathon.title === "U-GO AI Workshops & Advanced Courses";
            const isNasaSpaceApps =
              hackathon.title === "NASA Space Apps Challenge";
            const isTechSkillsFinalist = hackathon.title.startsWith("Top 6 Finalist");
            const articleLink = hackathon.links[0];

            return (
            <TimelineItem
              key={hackathon.title + hackathon.dates}
              className={`group w-full flex gap-5 sm:gap-8 ${
                isUgoAiSession ? "items-stretch" : "items-start"
              }`}
            >
              <TimelineConnectItem
                className={`flex items-start justify-center self-stretch ${
                  isUgoAiSession
                    ? "[&_[data-timeline-line]]:!block [&_[data-timeline-line]]:!top-0 [&_[data-timeline-line]]:!bottom-0 [&_[data-timeline-line]]:!h-auto"
                    : ""
                }`}
              >
                {isUgoAiSession ? (
                  <div className="size-10 bg-card z-10 flex shrink-0 items-center justify-center rounded-full border shadow ring-2 ring-border">
                    <Award className="size-5 text-muted-foreground" aria-hidden="true" />
                  </div>
                ) : hackathon.image ? (
                  <img
                    src={hackathon.image}
                    alt={hackathon.title}
                    className="size-10 bg-card z-10 shrink-0 overflow-hidden p-1 border rounded-full shadow ring-2 ring-border object-contain flex-none"
                  />
                ) : (
                  <div className="size-10 bg-card z-10 shrink-0 overflow-hidden p-1 border rounded-full shadow ring-2 ring-border flex-none" />
                )}
              </TimelineConnectItem>
              <div className="flex min-w-0 flex-1 flex-col justify-start gap-2">
                {isNasaSpaceApps && hackathon.image ? (
                  <div className="group w-full overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg">
                    <div className="flex flex-col p-5 sm:p-7">
                      <p className="text-sm font-semibold text-muted-foreground">
                        {hackathon.dates} &middot; National hackathon
                      </p>
                      <h3 className="mt-2 text-2xl font-bold tracking-tight underline decoration-foreground/30 decoration-2 underline-offset-4 transition-colors group-hover:text-foreground/80 sm:text-3xl">
                        <Link
                          href="https://www.spaceappschallenge.org/2023/find-a-team/creative-astrophiles/?tab=project"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="View the Creative Astrophiles NASA Space Apps project"
                          className="hover:text-foreground/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        >
                          NASA Space Apps Challenge
                        </Link>
                      </h3>
                      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                        {hackathon.description}
                      </p>
                    </div>
                    <div className="grid border-t border-border bg-muted/20 sm:grid-cols-2">
                      <div className="flex h-52 items-center justify-center overflow-hidden bg-muted/30 p-3 sm:h-56 sm:p-4">
                        <img
                          src={hackathon.image}
                          alt="Puspa and her teammates at the NASA Space Apps Hackathon in Nepal"
                          className="h-full w-full object-contain object-center"
                        />
                      </div>
                      <OpenAndDownloadLink
                        href="/nasa-space-apps-certificate.jpeg"
                        filename="Puspa-Shukla-NASA-Space-Apps-Certificate.jpeg"
                        ariaLabel="Open and download Puspa's NASA Space Apps certificate"
                        className="flex h-52 items-center justify-center overflow-hidden border-t border-border bg-muted/30 p-3 transition-colors hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring sm:h-56 sm:border-l sm:border-t-0 sm:p-4"
                      >
                        <img
                          src="/nasa-space-apps-certificate.jpeg"
                          alt="NASA Space Apps Kathmandu Certificate of Participation awarded to Puspa Shukla"
                          className="h-full w-full object-contain object-center"
                        />
                      </OpenAndDownloadLink>
                    </div>
                  </div>
                ) : isUgoAiSession ? (
                  <div className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg sm:min-h-[30rem]">
                    <div className="p-5 sm:p-7">
                      <p className="text-sm font-semibold text-muted-foreground">
                        AI learning and mentoring
                      </p>
                      <h3 className="mt-2 text-2xl font-bold tracking-tight underline decoration-foreground/30 decoration-2 underline-offset-4 transition-colors group-hover:text-foreground/80 sm:text-3xl">
                        U-GO AI Workshops &amp; Advanced Courses
                      </h3>
                    </div>
                    <UgoAiVideoGallery />
                    <div className="px-5 pb-5 sm:px-7 sm:pb-7">
                      <blockquote className="mt-4 rounded-r-lg border-l-4 border-primary bg-primary/5 px-4 py-3 text-base font-semibold leading-relaxed text-foreground sm:text-lg">
                        Puspa: &quot;Learns From Experience And Leads By Example&quot;
                      </blockquote>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {hackathon.description}
                      </p>
                    </div>
                  </div>
                ) : isRippleEffect && hackathon.image ? (
                  <div className="group grid overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg sm:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
                    <OpenAndDownloadLink
                      href={hackathon.image}
                      filename="U-GO-The-Ripple-Effect-Article.jpeg"
                      ariaLabel="Open and download the U-GO global publication article, The Ripple Effect"
                      className="flex items-start justify-center bg-white p-2 transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring sm:p-3"
                    >
                      <img
                        src={hackathon.image}
                        alt="Full page from U-GO's global publication featuring Puspa Shukla in The Ripple Effect article; click to open and download"
                        className="block h-auto w-full object-contain"
                      />
                    </OpenAndDownloadLink>
                    <div className="flex flex-col justify-center p-5 sm:p-8">
                      <p className="text-sm font-semibold text-muted-foreground">
                        {hackathon.dates} Â· U-GO Global Publication
                      </p>
                      <h3 className="mt-2 text-2xl font-bold tracking-tight underline decoration-foreground/30 decoration-2 underline-offset-4 transition-colors group-hover:text-foreground/80 sm:text-3xl">
                        The Ripple Effect
                      </h3>
                      <p className="mt-4 text-lg font-medium text-foreground">
                        From learner to leader
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {hackathon.description}
                      </p>
                    </div>
                  </div>
                ) : isNepalRepresentative && hackathon.image && articleLink ? (
                  <Link
                    href={articleLink.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="U-Go Nepal Representative â€” read about representing Nepal on a global platform in Vietnam"
                    className="grid overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 sm:min-h-[30rem] sm:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]"
                  >
                    <div className="flex items-center justify-center bg-muted/50 p-3 sm:p-5">
                      <img
                        src={hackathon.image}
                        alt="Puspa and fellow U-GO scholars holding the Nepal flag in Vietnam"
                        className="max-h-[30rem] w-full object-contain"
                      />
                    </div>
                    <div className="flex flex-col justify-center p-5 sm:p-8">
                      <p className="text-sm font-semibold text-muted-foreground">
                        {hackathon.dates} Â· Vietnam
                      </p>
                      <h3 className="mt-2 text-2xl font-bold tracking-tight underline decoration-foreground/30 decoration-2 underline-offset-4 transition-colors group-hover:text-foreground/80 sm:text-3xl">
                        U-Go Nepal Representative
                      </h3>
                      <p className="mt-4 text-lg font-medium text-foreground">
                        Representing Nepal on a Global Platform
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {hackathon.description}
                      </p>
                      <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-foreground">
                        Read the U-Go Nepal story
                        <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </Link>
                ) : isTechSkillsFinalist && articleLink ? (
                  <div className="group grid w-full overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-200 hover:border-primary/40 hover:shadow-lg sm:min-h-[30rem]">
                    <div className="flex flex-col p-5 sm:p-7">
                      <p className="text-sm font-semibold text-muted-foreground">
                        {hackathon.dates}
                      </p>
                      <h3 className="mt-2 text-2xl font-bold tracking-tight underline decoration-foreground/30 decoration-2 underline-offset-4 transition-colors group-hover:text-foreground/80 sm:text-3xl">
                        <Link
                          href={articleLink.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Read the Banking Samachar article about Puspa's TechSkills scholarship"
                          className="transition-colors hover:text-foreground/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        >
                          Top 6 Finalist | TechSkills Nepal IT Scholarship Program
                        </Link>
                      </h3>
                      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                        {hackathon.description}
                      </p>
                      <p className="mt-3 text-sm font-medium text-foreground">
                        Certificate of Completion from the TechSkills IT Scholarship Program.
                      </p>
                      <OpenAndDownloadLink
                        href="/techskills-certificate.jpeg"
                        filename="Puspa-Shukla-TechSkills-Certificate.jpeg"
                        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-foreground underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        Awarded the designation of System &amp; Network Support Specialist Â· View and download certificate
                        <Download className="size-4" />
                      </OpenAndDownloadLink>
                    </div>
                    <div className="grid border-t border-border bg-muted/20 sm:grid-cols-2">
                      {hackathon.image && (
                        <div className="flex h-52 items-center justify-center overflow-hidden bg-muted/30 p-3 sm:h-56 sm:p-4">
                          <img
                            src={hackathon.image}
                            alt="Puspa working at a computer during the TechSkills Nepal IT Scholarship Program"
                            className="h-full w-full object-contain object-center"
                          />
                        </div>
                      )}
                      <OpenAndDownloadLink
                        href="/techskills-certificate.jpeg"
                        filename="Puspa-Shukla-TechSkills-Certificate.jpeg"
                        ariaLabel="Open and download the TechSkills certificate"
                        className="flex h-52 items-center justify-center overflow-hidden border-t border-border bg-muted/30 p-3 transition-colors hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring sm:h-56 sm:border-l sm:border-t-0 sm:p-4"
                      >
                        <img
                          src="/techskills-certificate.jpeg"
                          alt="TechSkills certificate awarding Puspa Shukla the designation of System and Network Support Specialist"
                          className="h-full w-full object-contain object-center"
                        />
                      </OpenAndDownloadLink>
                    </div>
                  </div>
                ) : (
                  <>
                {hackathon.dates && (
                  <time className="text-xs text-muted-foreground">
                    {hackathon.dates}
                  </time>
                )}
                {hackathon.title && hackathon.title !== "U-GO Nepal Representative" && (
                  <h3 className="font-semibold leading-none">
                    {hackathon.title}
                  </h3>
                )}
                {hackathon.location && (
                  <p className="text-sm text-muted-foreground">
                    {hackathon.location}
                  </p>
                )}
                {hackathon.description && (
                  <p className="text-sm text-muted-foreground leading-relaxed wrap-break-word">
                    {hackathon.description}
                  </p>
                )}
                {hackathon.links && hackathon.links.length > 0 && (
                  <div className="mt-1 flex flex-row flex-wrap items-start gap-2">
                    {hackathon.links.map((link, idx) => {
                      const { icon: Icon, text } = getHackathonLinkMeta(
                        link.label,
                        link.href,
                      );

                      return (
                      <Link
                        href={link.href}
                        key={idx}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-2 text-xs font-medium text-foreground transition-all hover:border-foreground/20 hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      >
                        <Icon className="size-3.5 shrink-0" />
                        <span>{text}</span>
                        <ArrowUpRight className="size-3.5 shrink-0 text-muted-foreground transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </Link>
                    )})}
                  </div>
                )}
                  </>
                )}
              </div>
            </TimelineItem>
            );
          })}
        </Timeline>
      </div>
    </section>
  );
}
