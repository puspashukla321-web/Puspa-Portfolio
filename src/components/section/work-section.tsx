/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { DATA } from "@/data/resume";
import { Icons } from "@/components/icons";
import { ChevronDown, Globe, Github, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const toolIconByName = Object.fromEntries(
  DATA.skills.map((skill) => [skill.name, skill.icon]),
);

const fallbackToolIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  GitHub: Icons.github,
  Nodemailer: Icons.email,
};

function LogoImage({ src, alt }: { src: string; alt: string }) {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return (
      <div className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border bg-muted flex-none" />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border overflow-hidden object-contain flex-none"
      onError={() => setImageError(true)}
    />
  );
}

function PointList({
  items,
  accentClassName,
}: {
  items: readonly string[];
  accentClassName: string;
}) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span
            className={cn(
              "mt-2 block h-1.5 w-1.5 shrink-0 rounded-full",
              accentClassName,
            )}
          />
          <span className="leading-relaxed text-muted-foreground">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function WorkSection() {
  return (
    <div className="space-y-4">
      <p className="text-sm text-muted-foreground">
        Select an experience card to explore responsibilities and tools used.
      </p>
      <Accordion
        type="single"
        collapsible
        className="flex w-full flex-col gap-4"
      >
        {DATA.work.map((work) => (
          <AccordionItem
            key={work.company}
            value={work.company}
            className="group grid w-full min-w-0 gap-2 rounded-xl border border-border bg-card p-4 shadow-sm transition-all hover:border-primary/60 hover:shadow-md data-[state=open]:border-primary data-[state=open]:ring-1 data-[state=open]:ring-primary/20"
          >
            <AccordionTrigger className="group/trigger w-full cursor-pointer rounded-lg p-2 text-left transition-colors hover:bg-muted/50 hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring [&>svg]:hidden">
            <div className="flex w-full items-center justify-between gap-x-4 text-left">
              <div className="flex items-center gap-x-3 flex-1 min-w-0">
                <LogoImage src={work.logoUrl} alt={work.company} />
                <div className="flex-1 min-w-0 gap-0.5 flex flex-col">
                  <div className="font-semibold leading-none flex items-center gap-2">
                    {work.company}
                  </div>
                  <div className="font-sans text-sm text-muted-foreground">
                    {work.title}
                  </div>
                </div>
              </div>
              {(work.start || work.end) && (
                <div className="flex items-center gap-1 text-xs tabular-nums text-muted-foreground text-right flex-none">
                  <span>
                    {work.start}{work.start && work.end ? " - " : ""}{work.end}
                  </span>
                </div>
              )}
              <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-primary/30 bg-primary/5 px-2.5 py-1.5 text-[10px] font-semibold text-primary sm:text-xs">
                <span className="group-data-[state=open]:hidden">View responsibilities &amp; tools</span>
                <span className="hidden group-data-[state=open]:inline">Hide details</span>
                <ChevronDown className="size-3.5 transition-transform group-data-[state=open]:rotate-180" aria-hidden="true" />
              </span>
            </div>
            </AccordionTrigger>
            <AccordionContent className="mt-2 space-y-4 px-2 pb-2 text-sm text-muted-foreground">
            <div className="space-y-2">
              <h3 className="font-semibold text-foreground">What I Did</h3>
              <PointList items={work.work} accentClassName="bg-foreground/80" />
            </div>

            {work.impact && work.impact.length > 0 && (
              <div className="space-y-3">
                <h3 className="font-semibold text-foreground">Impact & Results</h3>
         
                  <PointList
                    items={work.impact}
                    accentClassName="bg-foreground"
                  />
         
              </div>
            )}

            {work.tools && work.tools.length > 0 ? (
              <div className="space-y-3">
                <h3 className="font-semibold text-foreground">Tools Used</h3>
                <div className="flex flex-wrap gap-2">
                  {work.tools.map((tool) => {
                    const Icon =
                      toolIconByName[tool] ?? fallbackToolIcons[tool] ?? Sparkles;

                    return (
                      <div
                        key={tool}
                        className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground"
                      >
                        <Icon className="size-3.5 shrink-0" />
                        <span>{tool}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : null}

            {work.urls && work.urls.length > 0 && (
              <div className="space-y-3">
                <h3 className="font-semibold text-foreground">Proof of Work</h3>
                <div className="flex flex-wrap gap-3">
                  {work.urls.map((url) => {
                    const isGithub = url.href.includes("github.com");
                    return (
                      <Link
                        key={url.href}
                        href={url.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg border border-border bg-muted/60 px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                      >
                        {isGithub ? (
                          <Icons.github className="w-4 h-4" />
                        ) : (
                          <Icons.globe className="w-4 h-4" />
                        )}
                        <span>{url.label}</span>

                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
