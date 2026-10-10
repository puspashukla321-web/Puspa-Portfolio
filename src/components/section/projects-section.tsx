import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

export default function ProjectsSection() {
    return (
        <section id="projects">
            <div className="flex min-h-0 flex-col gap-y-8">
                <div className="flex flex-col gap-y-3">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">Experiments & practice</p>
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                        <h2 className="font-display text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">Small builds, real learning.</h2>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 auto-rows-fr">
                    {DATA.projects.map((project, id) => (
                        <BlurFade
                            key={project.title}
                            delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                            className="h-full"
                        >
                            <ProjectCard
                                href={project.href}
                                key={project.title}
                                title={project.title}
                                description={project.description}
                                dates={project.dates}
                                tags={project.technologies}
                                image={project.image}
                                video={project.video}
                                links={project.links}
                            />
                        </BlurFade>
                    ))}
                </div>
            </div>
        </section>
    );
}
