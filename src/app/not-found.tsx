import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="glass-card max-w-md rounded-2xl p-8 text-center">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
          404
        </p>
        <h1 className="mt-3 text-3xl font-bold text-foreground">Page not found</h1>
        <p className="mt-3 text-sm leading-7 text-muted">
          The page you are looking for does not exist or may have been moved.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition hover:bg-accent/90"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>
      </div>
    </main>
  );
}
