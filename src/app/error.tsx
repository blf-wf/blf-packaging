"use client";

import { Button } from "@/components/ui/button";
import { AlertTriangle, RotateCw } from "lucide-react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <AlertTriangle className="h-12 w-12 text-destructive/60" />
      <h1 className="mt-4 text-xl font-semibold">Something went wrong</h1>
      <p className="mt-2 max-w-sm text-sm text-muted-foreground">
        An unexpected error occurred. Please try again, or contact us if the problem persists.
      </p>
      <Button onClick={reset} className="mt-6 gap-2">
        <RotateCw className="h-4 w-4" />
        Try again
      </Button>
    </div>
  );
}
