import { Suspense } from "react";
import { ThankYouContent } from "./ThankYouContent";

export const metadata = {
  title: "Your Playbook is Ready! — MagnetPage",
  description: "Download your free copy of The B2B Content Marketing Playbook.",
};

export default function ThankYouPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-[var(--background)]">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-[var(--border)] border-t-[var(--accent)]" />
        </div>
      }
    >
      <ThankYouContent />
    </Suspense>
  );
}
