import { ExternalLink } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { GitHubButtonIcon } from "@/components/ui/SocialIcons";
import { getInitials } from "@/lib/utils";

export function Projects() {
  return (
    <AnimatedSection id="projects" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          description="Backend, security, and enterprise systems built with production-grade stacks."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {portfolio.projects.map((project) => (
            <article
              key={project.title}
              className="glass-card group overflow-hidden rounded-2xl transition-transform duration-300 hover:-translate-y-1"
            >
              <div
                className={`flex h-44 items-center justify-center bg-gradient-to-br ${project.gradient}`}
              >
                <span className="text-4xl font-bold tracking-wider text-white/90">
                  {getInitials(project.title)}
                </span>
              </div>
              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <h3 className="text-xl font-semibold leading-snug text-foreground">
                    {project.title}
                  </h3>
                  {project.period ? (
                    <span className="shrink-0 rounded-full bg-surface px-3 py-1 text-xs text-muted">
                      {project.period}
                    </span>
                  ) : null}
                </div>
                <p className="mt-3 text-sm leading-7 text-muted">
                  {project.description}
                </p>

                {project.achievements ? (
                  <ul className="mt-4 space-y-2 text-sm text-muted">
                    {project.achievements.map((achievement) => (
                      <li key={achievement} className="flex gap-2">
                        <span className="text-accent">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-border/70 bg-background/50 px-3 py-1 text-xs text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Button href={project.githubUrl} variant="secondary" external>
                    <GitHubButtonIcon className="h-4 w-4" />
                    GitHub
                  </Button>
                  {project.liveUrl ? (
                    <Button href={project.liveUrl} variant="ghost" external>
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </Button>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
