import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import ContactSection from "@/components/section/contact-section";
import EducationSection from "@/components/section/education-section";
import HackathonsSection from "@/components/section/hackathons-section";
import ProjectsSection from "@/components/section/projects-section";
import SkillsSection from "@/components/section/skills-section";
import WorkSection from "@/components/section/work-section";
import CopyEmailBtn from "@/components/ui/CopyEmailBtn";
import Resume from "@/components/ui/Resume";

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
    <main className="relative mx-auto flex min-h-dvh w-full max-w-6xl flex-col gap-14 px-5 pb-16 sm:px-8 lg:px-12">
      <section id="hero">
        <div className="w-full space-y-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
            <div className="order-2 flex flex-col gap-4 md:order-1">
              <BlurFadeText
                as="h1"
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-semibold tracking-tighter sm:text-4xl lg:text-5xl"
                yOffset={8}
                text={`Hi, I'm ${DATA.name.split(" ")[0]}`}
              />
              <BlurFadeText
                className="max-w-[600px] text-muted-foreground md:text-lg lg:text-xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
              <BlurFade
                delay={BLUR_FADE_DELAY}
                className="z-20 mt-3 flex items-center gap-4"
              >
                <CopyEmailBtn />
                <Resume />
              </BlurFade>
            </div>
            <BlurFade delay={BLUR_FADE_DELAY} className="order-1 md:order-2">
              <Avatar className="h-40 w-32 shrink-0 rounded-md border shadow-lg ring-4 ring-muted md:ml-auto md:h-60 md:w-48">
                {DATA.avatarUrl && (
                  <AvatarImage
                    alt={DATA.name}
                    src={DATA.avatarUrl}
                    className="h-full w-full object-cover"
                  />
                )}
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className="text-xl font-bold">About</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <div className="prose text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
              {DATA.professionalSummary}
            </div>
          </BlurFade>
        </div>
      </section>
      <section id="work">
        <div className="py-14 sm:py-20">
          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <SectionHeading
              index="01"
              eyebrow="Experience"
              title="Work & contribution"
            />
            <WorkSection />
          </BlurFade>
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 8}>
            <EducationSection />
          </BlurFade>
        </div>
      </section>
      <SkillsSection />
      <section id="projects" className="border-t border-border py-14 sm:py-20">
        <BlurFade delay={BLUR_FADE_DELAY * 12}>
          <ProjectsSection />
        </BlurFade>
      </section>
      <section className="border-t border-border py-14 sm:py-20">
        <BlurFade delay={BLUR_FADE_DELAY * 14}>
          <HackathonsSection />
        </BlurFade>
      </section>
      <section id="contact">
        <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <ContactSection />
        </BlurFade>
      </section>
    </main>
  );
}
