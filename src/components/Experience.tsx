import { Briefcase } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Experience() {
  return (
    <AnimatedSection id="experience" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Experience"
          title="Professional journey"
          description="Industry experience in backend engineering, cloud automation, and security."
        />

        <div className="relative space-y-8 before:absolute before:left-[19px] before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-border sm:before:left-[23px]">
          {portfolio.experience.map((item, index) => (
            <article key={`${item.company}-${item.title}`} className="relative pl-12 sm:pl-14">
              <div className="absolute left-0 top-1 flex h-10 w-10 items-center justify-center rounded-full border border-accent/30 bg-accent/10 text-accent sm:h-12 sm:w-12">
                <Briefcase className="h-5 w-5" />
              </div>
              <div className="glass-card rounded-2xl p-6 sm:p-8">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-accent">
                      {item.company}
                      {item.subtitle ? ` — ${item.subtitle}` : ""}
                    </p>
                  </div>
                  <span className="rounded-full bg-surface px-3 py-1 text-xs text-muted">
                    {item.period ?? String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {item.technologies ? (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg border border-border/70 bg-background/60 px-3 py-1 text-xs text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                ) : null}

                <ul className="mt-5 space-y-2 text-sm leading-7 text-muted">
                  {item.responsibilities.map((responsibility) => (
                    <li key={responsibility} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
