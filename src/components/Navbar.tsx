"use client";

import { Menu, Moon, Sun, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { portfolio } from "@/data/portfolio";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useTheme } from "@/components/providers/ThemeProvider";
import { SocialIcons } from "@/components/ui/SocialIcons";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const activeSection = useActiveSection();
  const { theme, toggleTheme, mounted } = useTheme();

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/75 backdrop-blur-xl">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <button
          onClick={() => scrollTo("home")}
          className="text-lg font-semibold tracking-tight text-foreground"
        >
          DG<span className="text-accent">.</span>
        </button>

        <div className="hidden items-center gap-1 lg:flex">
          {portfolio.navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={cn(
                "rounded-lg px-3 py-2 text-sm transition-colors",
                activeSection === item.id
                  ? "bg-accent/10 text-accent"
                  : "text-muted hover:text-foreground",
              )}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <SocialIcons
            links={portfolio.socialLinks.filter((link) => link.icon !== "email")}
            className="mr-1"
          />
          {portfolio.resumeUrl ? (
            <Button href={portfolio.resumeUrl} variant="secondary" external>
              Resume
            </Button>
          ) : null}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="rounded-lg p-2 text-muted transition-colors hover:bg-surface hover:text-foreground"
          >
            {mounted && theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="rounded-lg p-2 text-muted"
          >
            {mounted && theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>
          <button
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle menu"
            className="rounded-lg p-2 text-muted"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-border/60 bg-background/95 lg:hidden"
          >
            <div className="space-y-1 px-4 py-4">
              {portfolio.navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={cn(
                    "block w-full rounded-lg px-3 py-2 text-left text-sm",
                    activeSection === item.id
                      ? "bg-accent/10 text-accent"
                      : "text-muted",
                  )}
                >
                  {item.label}
                </button>
              ))}
              <div className="flex items-center justify-between pt-3">
                <SocialIcons links={portfolio.socialLinks} />
                {portfolio.resumeUrl ? (
                  <Button href={portfolio.resumeUrl} variant="secondary" external>
                    Resume
                  </Button>
                ) : null}
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
