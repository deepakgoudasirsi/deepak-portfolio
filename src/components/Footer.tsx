import { portfolio } from "@/data/portfolio";
import { SocialIcons } from "@/components/ui/SocialIcons";

export function Footer() {
  return (
    <footer className="border-t border-border/60 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-sm text-muted sm:flex-row sm:px-6 lg:px-8">
        <p>© 2026 {portfolio.name}. All rights reserved.</p>
        <SocialIcons links={portfolio.socialLinks} />
      </div>
    </footer>
  );
}
