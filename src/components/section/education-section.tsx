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
import { ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

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

export default function EducationSection() {
  return (
    <Accordion type="single" collapsible className="w-full grid gap-6">
      {DATA.education.map((education) => (
        <AccordionItem
          key={education.school}
          value={education.school}
          className="w-full border-b-0 grid gap-2"
        >
          <AccordionTrigger className="hover:no-underline p-0 cursor-pointer transition-colors rounded-none group [&>svg]:hidden">
            <div className="flex items-center gap-x-3 justify-between w-full text-left">
              <div className="flex items-center gap-x-3 flex-1 min-w-0">
                <LogoImage src={education.logoUrl} alt={education.school} />
                <div className="flex-1 min-w-0 gap-0.5 flex flex-col">
                  <div className="font-semibold leading-none flex items-center gap-2">
                    {education.school}
                    <span className="relative grid size-6 shrink-0 place-items-center rounded-full border border-foreground/25 bg-foreground/10 text-foreground shadow-sm transition-colors group-hover:border-foreground/40 group-hover:bg-foreground/15 group-focus-visible:ring-2 group-focus-visible:ring-ring">
                      <ChevronRight
                        className={cn(
                          "absolute size-4 shrink-0 text-foreground stroke-[2.5] transition-all duration-200 ease-out",
                          "translate-x-0 opacity-100",
                          "group-hover:translate-x-0.5",
                          "group-data-[state=open]:translate-x-0 group-data-[state=open]:opacity-0",
                        )}
                        aria-hidden="true"
                      />
                      <ChevronDown
                        className={cn(
                          "absolute size-4 shrink-0 text-foreground stroke-[2.5] transition-all duration-200",
                          "opacity-0 rotate-0",
                          "group-data-[state=open]:opacity-100 group-data-[state=open]:rotate-180",
                        )}
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                  <div className="font-sans text-sm text-muted-foreground">
                    {education.program} - {education.specialization}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1 text-xs tabular-nums text-muted-foreground text-right flex-none">
                <span>
                  {education.start} - {education.end}
                </span>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="mt-4 space-y-4 text-sm text-muted-foreground">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <h3 className="font-semibold text-foreground">Education Details</h3>
                {education.href && (
                  <a
                    href={education.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm underline underline-offset-4"
                  >
                    Pokhara University
                  </a>
                )}
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
      ))}
    </Accordion>
  );
}
