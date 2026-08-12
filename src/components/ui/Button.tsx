"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
  external?: boolean;
};

const variants = {
  primary:
    "bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg shadow-accent/20",
  secondary:
    "border border-border bg-surface/70 text-foreground hover:border-accent/50 hover:bg-surface",
  ghost: "text-muted hover:text-foreground hover:bg-surface/60",
};

export function Button({
  href,
  onClick,
  variant = "primary",
  children,
  className,
  type = "button",
  external,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium transition-all duration-200",
    variants[variant],
    className,
  );

  if (href) {
    return (
      <motion.a
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        href={href}
        className={classes}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        onClick={onClick}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      type={type}
      onClick={onClick}
      className={classes}
    >
      {children}
    </motion.button>
  );
}
