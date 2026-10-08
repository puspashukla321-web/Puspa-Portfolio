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
import { ChevronDown, ChevronRight, Globe, Github, Sparkles } from "lucide-react";
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
    <Accordion type="single" collapsible className="w-full grid gap-6">
      {DATA.work.map((work) => (
        <AccordionItem
          key={work.company}
          value={work.company}
          className="w-full border-b-0 grid gap-2"
        >
          <AccordionTrigger className="hover:no-underline p-0 cursor-pointer transition-colors rounded-none group [&>svg]:hidden">
            <div className="flex items-center gap-x-3 justify-between w-full text-left">
              <div className="flex items-center gap-x-3 flex-1 min-w-0">
                <LogoImage src={work.logoUrl} alt={work.company} />
                <div className="flex-1 min-w-0 gap-0.5 flex flex-col">
                  <div className="font-semibold leading-none flex items-center gap-2">
                    {work.company}
                    <span className="relative inline-flex items-center w-3.5 h-3.5">
                      <ChevronRight
                        className={cn(
                          "absolute h-3.5 w-3.5 shrink-0 text-muted-foreground stroke-2 transition-all duration-300 ease-out",
                          "translate-x-0 opacity-0",
                          "group-hover:translate-x-1 group-hover:opacity-100",
                          "group-data-[state=open]:opacity-0 group-data-[state=open]:translate-x-0",
                        )}
                      />
                      <ChevronDown
                        className={cn(
                          "absolute h-3.5 w-3.5 shrink-0 text-muted-foreground stroke-2 transition-all duration-200",
                          "opacity-0 rotate-0",
                          "group-data-[state=open]:opacity-100 group-data-[state=open]:rotate-180",
                        )}
                      />
                    </span>
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
            </div>
          </AccordionTrigger>
          <AccordionContent className="mt-4 space-y-4 text-sm text-muted-foreground">
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

            {work.tools && work.tools.length > 0 && (
              <div className="space-y-3">
                <h3 className="font-semibold text-foreground">Tech Used</h3>
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
            )}

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
  );
}
