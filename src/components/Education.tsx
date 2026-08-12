import { portfolio } from "@/data/portfolio";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Education() {
  return (
    <AnimatedSection id="education" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Education"
          title="Academic background"
          description="Strong foundation in computer science with postgraduate specialization."
        />

        <div className="space-y-6">
          {portfolio.education.map((item) => (
            <article
              key={item.degree}
              className="glass-card rounded-2xl p-6 sm:p-8"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {item.degree}
                  </h3>
                  <p className="mt-2 text-muted">{item.institution}</p>
                </div>
                <div className="text-right">
                  {item.period ? (
                    <p className="text-sm text-muted">{item.period}</p>
                  ) : null}
                  <p className="mt-1 text-sm font-medium text-accent">
                    CGPA: {item.cgpa}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
