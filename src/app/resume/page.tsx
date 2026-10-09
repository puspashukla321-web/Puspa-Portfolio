import { DATA } from "@/data/resume";
import PrintResumeButton from "@/components/ui/print-resume-button";

export const metadata = {
  title: "Resume",
};

export default function ResumePage() {
  return (
    <main className="mx-auto min-h-screen max-w-4xl bg-background px-6 py-8 text-foreground print:max-w-none print:bg-white print:px-0 print:py-0 print:text-black">
      <div className="mb-6 flex justify-end print:hidden">
        <PrintResumeButton />
      </div>
      <article className="space-y-6 print:space-y-4">
        <header className="space-y-2 text-center">
          <h1 className="text-3xl font-bold uppercase">{DATA.name}</h1>
          <p className="text-sm">
            {DATA.location} <span aria-hidden="true">|</span>{" "}
            <a href={`mailto:${DATA.contact.email}`} className="underline print:no-underline">
              {DATA.contact.email}
            </a>{" "}
            <span aria-hidden="true">|</span>{" "}
            <a href={`tel:${DATA.contact.tel}`} className="underline print:no-underline">
              {DATA.contact.tel}
            </a>{" "}
            <span aria-hidden="true">|</span>{" "}
            <a href={DATA.contact.social.LinkedIn.url} className="underline print:no-underline">
              LinkedIn
            </a>
            <span aria-hidden="true">|</span>{" "}
            <a href={DATA.contact.social.GitHub.url} className="underline print:no-underline">
              GitHub
            </a>{" "}
            <span aria-hidden="true">|</span>{" "}
            <a href={DATA.contact.social.X.url} className="underline print:no-underline">
              X
            </a>
          </p>
        </header>

        <ResumeSection title="Professional Summary">
          <p className="leading-relaxed">{DATA.professionalSummary}</p>
        </ResumeSection>

        <ResumeSection title="Skills">
          <ul className="space-y-1">
            {DATA.skillGroups.map((group) => (
              <li key={group.label}><strong>{group.label}:</strong> {group.items}</li>
            ))}
          </ul>
        </ResumeSection>

        <ResumeSection title="Work Experience">
          <ul className="space-y-3">
            {DATA.work.map((role) => (
              <li key={role.company}>
                <strong>{role.company} — {role.title}</strong>
                <ul className="list-disc space-y-1 pl-5">
                  {role.work.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </li>
            ))}
          </ul>
        </ResumeSection>

        <ResumeSection title="Projects">
          <ul className="space-y-2">
            {DATA.projects.map((project) => (
              <li key={project.title}>
                <strong>{project.title}:</strong> {project.description}
              </li>
            ))}
          </ul>
        </ResumeSection>

        <ResumeSection title="Education">
          <ul className="space-y-3">
            {DATA.education.map((education) => (
              <li key={education.school}>
                <p>
                  <strong>{education.school}</strong> - {education.program} ({education.specialization})
                  {education.href && (
                    <a className="ml-2 underline print:no-underline" href={education.href}>
                      Pokhara University
                    </a>
                  )}
                  <span className="float-right">{education.start}-{education.end}</span>
                </p>
                <ul className="list-disc pl-5">
                  {education.details.map((detail) => <li key={detail}>{detail}</li>)}
                  {"highlights" in education && education.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                </ul>
              </li>
            ))}
          </ul>
        </ResumeSection>

        <ResumeSection title="Achievements & Recognition">
          <ul className="list-disc space-y-1 pl-5">
            {DATA.hackathonsAndEvents.map((item) => (
              <li key={item.title}><strong>{item.title}:</strong> {item.description}</li>
            ))}
          </ul>
        </ResumeSection>
      </article>
    </main>
  );
}

function ResumeSection({
  title,
  children,
}: Readonly<{ title: string; children: React.ReactNode }>) {
  return (
    <section className="space-y-2">
      <h2 className="border-b border-foreground pb-1 text-lg font-bold uppercase print:border-black">
        {title}
      </h2>
      {children}
    </section>
  );
}
