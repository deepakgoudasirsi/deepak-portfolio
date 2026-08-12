import {
  Brain,
  Cloud,
  Code2,
  Database,
  Layers,
  Server,
} from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

const categoryIcons = [Code2, Server, Layers, Database, Cloud, Brain];

export function Skills() {
  return (
    <AnimatedSection id="skills" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Skills"
          title="Technical toolkit"
          description="Technologies and tools I use to build scalable, secure, and intelligent software."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {portfolio.skillCategories.map((category, index) => {
            const Icon = categoryIcons[index % categoryIcons.length];
            return (
              <article
                key={category.title}
                className="glass-card group rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-border/70 bg-background/50 px-3 py-1.5 text-sm text-muted"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
