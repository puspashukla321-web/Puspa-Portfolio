"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";
import { DATA } from "@/data/resume";
import { ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

function SchoolLogo({
  school,
  src,
  mark,
}: {
  school: string;
  src: string;
  mark: string;
}) {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <span
      role="img"
      aria-label={`${school} logo`}
      className="relative flex size-10 flex-none items-center justify-center overflow-hidden rounded-full border border-border bg-muted text-xs font-extrabold tracking-wide text-foreground shadow ring-2 ring-border transition-transform group-hover/logo:scale-105 md:size-11 md:text-sm"
    >
      {(!src || imageError || !imageLoaded) && <span>{mark}</span>}
      {src && !imageError && (
        <img
          src={src}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 size-full rounded-full p-1 object-contain"
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageError(true)}
        />
      )}
      {imageLoaded && !imageError && (
        <span className="absolute bottom-0 right-0 z-10 flex size-4 items-center justify-center rounded-full border border-background bg-card text-[8px] font-bold leading-none text-foreground shadow-sm md:size-[18px] md:text-[9px]">
          {mark}
        </span>
      )}
    </span>
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

export default function EducationSection() {
  return (
    <Accordion type="single" collapsible className="w-full grid gap-6">
      {DATA.education.map((education) => {
        const fallbackHref = education.href;
        const websiteUrl =
          "websiteUrl" in education &&
          typeof education.websiteUrl === "string"
            ? education.websiteUrl
            : fallbackHref;

        return (
          <AccordionItem
            key={education.school}
            value={education.school}
            className="w-full border-b-0 grid gap-2"
          >
          <div className="group/education flex w-full items-center gap-3">
            <a
              href={websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${education.school} website`}
              title={`Visit ${education.school} website`}
              className="group/logo inline-flex shrink-0 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-background"
            >
              <SchoolLogo
                school={education.school}
                src={education.logoUrl}
                mark={education.school === "CAMAD College" ? "C" : "EF"}
              />
            </a>
            <AccordionTrigger className="group min-w-0 flex-1 hover:no-underline p-0 cursor-pointer transition-colors rounded-none [&>svg]:hidden">
              <div className="flex items-center justify-between w-full gap-3 text-left">
                <div className="flex-1 min-w-0 gap-0.5 flex flex-col">
                  <div className="flex items-center gap-2 text-base font-semibold leading-tight">
                    {education.school}
                    <span className="relative ml-1 inline-flex size-5 shrink-0 items-center justify-center text-muted-foreground transition-colors group-hover/education:text-foreground group-data-[state=open]:text-foreground">
                      <ChevronRight
                        className={cn(
                          "absolute size-3.5 stroke-2 transition-all duration-300 ease-out",
                          "translate-x-0 opacity-0",
                          "group-hover/education:translate-x-1 group-hover/education:opacity-100",
                          "group-focus-visible:translate-x-1 group-focus-visible:opacity-100",
                          "group-data-[state=open]:translate-x-0 group-data-[state=open]:opacity-0",
                        )}
                        aria-hidden="true"
                      />
                      <ChevronDown
                        className={cn(
                          "absolute size-3.5 stroke-2 transition-all duration-200",
                          "rotate-0 opacity-0",
                          "group-data-[state=open]:rotate-180 group-data-[state=open]:opacity-100",
                        )}
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                  <div className="font-sans text-sm text-muted-foreground">
                    {education.program} - {education.specialization}
                  </div>
                </div>
                <div className="flex items-center gap-1 text-xs tabular-nums text-muted-foreground text-right flex-none">
                  <span>
                    {education.start} - {education.end}
                  </span>
                </div>
              </div>
            </AccordionTrigger>
          </div>
          <AccordionContent className="mt-4 space-y-4 text-sm text-muted-foreground">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <h3 className="font-semibold text-foreground">Education Details</h3>
                <a
                  href={websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-primary underline underline-offset-4 hover:text-primary/80 focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  Visit {education.school} website
                </a>
              </div>
              <PointList
                items={education.details}
                accentClassName="bg-foreground/80"
              />
            </div>

            {"highlights" in education && education.highlights.length > 0 && (
              <div className="space-y-3">
                <h3 className="font-semibold text-foreground">Highlights</h3>
                <PointList
                  items={education.highlights}
                  accentClassName="bg-foreground"
                />
              </div>
            )}
          </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
