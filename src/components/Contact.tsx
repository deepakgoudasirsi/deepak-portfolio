"use client";

import { FormEvent, useState } from "react";
import { portfolio } from "@/data/portfolio";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { SocialIcons } from "@/components/ui/SocialIcons";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "");
    const email = String(formData.get("email") ?? "");
    const subject = String(formData.get("subject") ?? "");
    const message = String(formData.get("message") ?? "");
    const body = `From: ${name} (${email})\n\n${message}`;

    window.location.href = `mailto:${portfolio.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  return (
    <AnimatedSection id="contact" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Let's connect"
          description="Have an opportunity, collaboration idea, or question? Send a message."
        />

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <form
            onSubmit={handleSubmit}
            className="glass-card space-y-5 rounded-2xl p-6 sm:p-8"
          >
            <div>
              <label htmlFor="name" className="mb-2 block text-sm text-muted">
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                className="w-full rounded-xl border border-border bg-background/70 px-4 py-3 text-sm text-foreground outline-none transition focus:border-accent"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm text-muted">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-xl border border-border bg-background/70 px-4 py-3 text-sm text-foreground outline-none transition focus:border-accent"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="subject" className="mb-2 block text-sm text-muted">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                required
                className="w-full rounded-xl border border-border bg-background/70 px-4 py-3 text-sm text-foreground outline-none transition focus:border-accent"
                placeholder="Project inquiry"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block text-sm text-muted">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full resize-none rounded-xl border border-border bg-background/70 px-4 py-3 text-sm text-foreground outline-none transition focus:border-accent"
                placeholder="Tell me about the opportunity..."
              />
            </div>
            <Button type="submit" className="w-full sm:w-auto">
              Send Message
            </Button>
            {submitted ? (
              <p className="text-sm text-accent">
                Your email client should open shortly. If it does not, reach out
                directly at{" "}
                <a
                  href={`mailto:${portfolio.email}`}
                  className="underline underline-offset-2"
                >
                  {portfolio.email}
                </a>
                .
              </p>
            ) : null}
          </form>

          <aside className="glass-card rounded-2xl p-6 sm:p-8">
            <h3 className="text-xl font-semibold text-foreground">
              Direct links
            </h3>
            <p className="mt-3 text-sm leading-7 text-muted">
              Prefer email or social platforms? Use the links below. All contact
              details are managed in{" "}
              <code className="rounded bg-surface px-1.5 py-0.5 text-xs">
                src/data/portfolio.ts
              </code>
              .
            </p>
            <div className="mt-6 space-y-4 text-sm text-muted">
              <p>
                <span className="font-medium text-foreground">Email:</span>{" "}
                <a
                  href={`mailto:${portfolio.email}`}
                  className="text-accent hover:underline"
                >
                  {portfolio.email}
                </a>
              </p>
            </div>
            <SocialIcons links={portfolio.socialLinks} className="mt-8" />
          </aside>
        </div>
      </div>
    </AnimatedSection>
  );
}
