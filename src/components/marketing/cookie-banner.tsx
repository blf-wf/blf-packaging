"use client";

import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

type Consent = "all" | "essential";

const STORAGE_KEY = "blf_cookie_consent";

function getStoredConsent(): Consent | null {
  if (typeof window === "undefined") return null;
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === "all" || stored === "essential") return stored;
  return null;
}

function storeConsent(consent: Consent) {
  localStorage.setItem(STORAGE_KEY, consent);
  // Also set a cookie for server-side / middleware access
  document.cookie = `${STORAGE_KEY}=${consent};path=/;max-age=${60 * 60 * 24 * 365};SameSite=Lax`;
  // Notify other components
  window.dispatchEvent(new CustomEvent("cookie-consent-updated", { detail: consent }));
}

export function CookieBanner() {
  const [consent, setConsent] = useState<Consent | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setConsent(getStoredConsent());
    setMounted(true);
  }, []);

  const handleAcceptAll = useCallback(() => {
    storeConsent("all");
    setConsent("all");
  }, []);

  const handleEssentialOnly = useCallback(() => {
    storeConsent("essential");
    setConsent("essential");
  }, []);

  // Don't render anything until mounted (avoid hydration mismatch)
  if (!mounted) return null;

  // Already consented — don't show banner
  if (consent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <Card className="mx-auto max-w-2xl shadow-lg border-primary/10">
        <CardContent className="p-5">
          <p className="text-sm leading-relaxed">
            We use cookies to analyze site traffic and improve your experience. See our{" "}
            <Link href="/cookie-policy" className="underline hover:text-primary">
              Cookie Policy
            </Link>{" "}
            for details.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Button size="sm" onClick={handleAcceptAll}>
              Accept All
            </Button>
            <Button size="sm" variant="outline" onClick={handleEssentialOnly}>
              Essential Only
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export function hasAnalyticsConsent(): boolean {
  if (typeof window === "undefined") return false;
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored === "all";
}
