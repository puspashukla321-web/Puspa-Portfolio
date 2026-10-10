import {
  ArrowDown,
  ArrowDownRight,
  ArrowUpRight,
} from "lucide-react";
import BlurFade from "@/components/magicui/blur-fade";
import HeroNetworkScene from "@/components/hero-network-scene";
import ContactSection from "@/components/section/contact-section";
import EducationSection from "@/components/section/education-section";
import HackathonsSection from "@/components/section/hackathons-section";
import ProjectsSection from "@/components/section/projects-section";
import SkillsSection from "@/components/section/skills-section";
import WorkSection from "@/components/section/work-section";
import CopyEmailBtn from "@/components/ui/CopyEmailBtn";
import Resume from "@/components/ui/Resume";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

function SectionHeading({
  index,
  eyebrow,
  title,
}: {
  index: string;
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="mb-7 flex items-end justify-between gap-4 border-b border-border pb-4">
      <div>
        <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
          {eyebrow}
        </p>
        <h2 className="font-display text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">
          {title}
        </h2>
      </div>
      <span className="pb-1 font-mono text-xs text-muted-foreground">{index}</span>
    </div>
  );
}

export default function Page() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col px-5 pb-16 sm:px-8 lg:px-12">
      <header className="flex items-center justify-between border-b border-border py-5">
        <a
          href="#hero"
          aria-label={`${DATA.name}, home`}
          className="font-display text-2xl font-semibold tracking-[-0.08em]"
        >
          PS<span className="text-primary">.</span>
        </a>
        <p className="hidden text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground sm:block">
          A portfolio in progress
        </p>
        <a
          href="#contact"
          className="group inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary"
        >
          Let&apos;s connect
          <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </header>

      <section
        id="hero"
        className="grid items-center gap-12 border-b border-border py-14 sm:py-20 lg:grid-cols-[1.12fr_0.88fr] lg:gap-16 lg:py-24"
      >
        <div className="order-2 lg:order-1">
          <BlurFade delay={BLUR_FADE_DELAY} yOffset={10}>
            <p className="mb-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              <span className="size-2 rounded-full bg-primary" />
              Kathmandu, Nepal <span className="text-border">/</span> Open to what&apos;s next
            </p>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 2} yOffset={10}>
            <h1 className="max-w-3xl font-display text-[clamp(3.5rem,8vw,7.25rem)] font-semibold leading-[0.91] tracking-[-0.075em]">
              People-first
              <br />
              tech, built
              <br />
              <span className="text-primary">with purpose.</span>
            </h1>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 3} yOffset={10}>
            <p className="mt-7 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              I&apos;m {DATA.name}—a BCA student exploring web development and IT
              systems, while helping people build confidence with practical AI.
              I like making technology more useful, understandable, and open to
              everyone.
            </p>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4} yOffset={10}>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-3 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                Explore my work
                <ArrowDownRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </a>
              <CopyEmailBtn />
              <Resume />
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 5} yOffset={10}>
            <div className="mt-12 grid max-w-xl grid-cols-3 border-t border-border pt-5">
              <div className="pr-3">
                <p className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                  400<span className="text-primary">+</span>
                </p>
                <p className="mt-1 text-xs leading-5 text-muted-foreground">
                  scholars supported
                </p>
              </div>
              <div className="border-l border-border px-4">
                <p className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                  8
                </p>
                <p className="mt-1 text-xs leading-5 text-muted-foreground">
                  countries reached
                </p>
              </div>
              <div className="border-l border-border pl-4">
                <p className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                  3.60
                </p>
                <p className="mt-1 text-xs leading-5 text-muted-foreground">
                  current CGPA
                </p>
              </div>
            </div>
            <p className="mt-3 max-w-xl text-[11px] leading-5 text-muted-foreground">
              U-GO&apos;s global publication reported a 97% AI-course completion
              rate across 3,000+ scholars in eight countries.
            </p>
          </BlurFade>
        </div>

        <BlurFade
          delay={BLUR_FADE_DELAY * 2}
          className="order-1 mx-auto w-full max-w-md lg:order-2 lg:max-w-none"
        >
          <div className="portrait-panel relative mx-auto aspect-[0.88] w-full max-w-[26rem] overflow-hidden rounded-[1.75rem] border border-border bg-secondary/60 shadow-sm shadow-foreground/5">
            <HeroNetworkScene className="absolute inset-0" />
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-[13%] aspect-square w-[74%] -translate-x-1/2 rounded-full border border-primary/10"
            />
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-[19%] aspect-square w-[61%] -translate-x-1/2 rounded-full border border-primary/10"
            />
            <Avatar className="absolute bottom-[13%] left-1/2 z-10 aspect-square w-[72%] -translate-x-1/2 rounded-full border border-background bg-card shadow-xl shadow-foreground/10 ring-8 ring-background/70">
              {DATA.avatarUrl && (
                <AvatarImage
                  alt={`Portrait of ${DATA.name}`}
                  src={DATA.avatarUrl}
                  className="h-full w-full object-contain object-bottom"
                />
              )}
              <AvatarFallback className="font-display text-6xl font-semibold text-primary">
                {DATA.initials}
              </AvatarFallback>
            </Avatar>
            <div className="absolute bottom-4 left-4 z-20 flex items-center gap-3 rounded-lg border border-border/80 bg-card px-3 py-2 shadow-sm sm:bottom-5 sm:left-5">
              <span className="flex size-2 rounded-full bg-primary" />
              <span className="text-left">
                <span className="block font-display text-sm font-semibold leading-tight">
                  {DATA.name}
                </span>
                <span className="mt-0.5 block text-[11px] text-muted-foreground">
                  Kathmandu, Nepal
                </span>
              </span>
            </div>
            <div className="absolute left-4 top-4 z-20 bg-background px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-foreground sm:left-5 sm:top-5">
              Learning by doing
            </div>
          </div>
        </BlurFade>
      </section>

      <section id="about" className="grid gap-6 border-b border-border py-14 sm:py-20 md:grid-cols-[0.65fr_1.35fr] md:gap-12">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
            A little about me
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">
            Curious by nature.
            <br />
            Useful by design.
          </h2>
        </div>
        <div className="max-w-2xl self-end">
          <p className="text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            {DATA.professionalSummary}
          </p>
          <a
            href="#work"
            className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-primary"
          >
            Follow the story
            <ArrowDown className="size-3.5 transition-transform group-hover:translate-y-0.5" />
          </a>
        </div>
      </section>

      <section id="work" className="py-14 sm:py-20">
        <BlurFade delay={BLUR_FADE_DELAY * 6}>
          <SectionHeading index="01" eyebrow="Experience" title="Work & contribution" />
          <WorkSection />
        </BlurFade>
      </section>

      <section id="education" className="border-t border-border py-14 sm:py-20">
        <BlurFade delay={BLUR_FADE_DELAY * 8}>
          <SectionHeading index="02" eyebrow="Learning" title="Education" />
          <EducationSection />
        </BlurFade>
      </section>

      <section className="border-t border-border py-14 sm:py-20">
        <BlurFade delay={BLUR_FADE_DELAY * 10}>
          <SectionHeading index="03" eyebrow="In my toolkit" title="Skills I’m growing" />
          <SkillsSection />
        </BlurFade>
      </section>

      <section className="border-t border-border py-14 sm:py-20">
        <BlurFade delay={BLUR_FADE_DELAY * 12}>
          <ProjectsSection />
        </BlurFade>
      </section>

      <section className="border-t border-border py-14 sm:py-20">
        <BlurFade delay={BLUR_FADE_DELAY * 14}>
          <HackathonsSection />
        </BlurFade>
      </section>

      <section id="contact" className="border-t border-border py-14 sm:py-20">
        <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <div className="mb-7">
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
              The next chapter
            </p>
            <h2 className="font-display text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">
              Have something in mind?
            </h2>
          </div>
          <ContactSection />
        </BlurFade>
      </section>

      <footer className="flex flex-col justify-between gap-2 border-t border-border pt-5 text-xs text-muted-foreground sm:flex-row">
        <p>Made with curiosity in Kathmandu.</p>
        <a
          href="#hero"
          className="group inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
        >
          Back to top
          <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </footer>
    </main>
  );
}
