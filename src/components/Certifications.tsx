import { Award } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Certifications() {
  return (
    <AnimatedSection id="certifications" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Certifications"
          title="Continuous learning"
          description="Certifications and job simulations that reflect practical industry exposure."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {portfolio.certifications.map((certification) => (
            <article
              key={certification.title}
              className="glass-card flex h-full flex-col rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <Award className="h-5 w-5" />
              </div>
              <h3 className="text-base font-semibold leading-6 text-foreground">
                {certification.title}
              </h3>
              {certification.issuer ? (
                <p className="mt-2 text-sm text-muted">{certification.issuer}</p>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
