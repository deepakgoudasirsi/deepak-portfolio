import { GraduationCap } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  return (
    <AnimatedSection id="about" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About Me"
          title="Building reliable, production-ready systems"
          description={portfolio.about.summary}
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <article className="glass-card rounded-2xl p-6 sm:p-8">
            <h3 className="mb-4 text-xl font-semibold text-foreground">
              Education Highlights
            </h3>
            <div className="space-y-5">
              {portfolio.about.educationHighlights.map((item) => (
                <div key={item.degree} className="flex gap-4">
                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{item.degree}</p>
                    <p className="text-sm text-muted">{item.institution}</p>
                    <p className="mt-1 text-sm text-accent">CGPA: {item.cgpa}</p>
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="glass-card rounded-2xl p-6 sm:p-8">
            <h3 className="mb-4 text-xl font-semibold text-foreground">
              Interests
            </h3>
            <ul className="grid gap-3 sm:grid-cols-2">
              {portfolio.interests.map((interest) => (
                <li
                  key={interest}
                  className="rounded-xl border border-border/70 bg-surface/50 px-4 py-3 text-sm text-muted"
                >
                  {interest}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </AnimatedSection>
  );
}
