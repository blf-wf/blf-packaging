"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Box } from "lucide-react";

const NAV_ITEMS = [
  "products",
  "applications",
  "customization",
  "about",
  "blog",
  "compliance",
  "contact",
] as const;

export function SiteHeader() {
  const t = useTranslations("Navigation");
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (key: string) =>
    pathname === `/${key}` || pathname.startsWith(`/${key}/`);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 text-xl font-semibold tracking-tight">
          <Box className="h-6 w-6 text-primary" />
          Blf Packaging
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((key) => {
            const active = isActive(key);
            return (
              <Link
                key={key}
                href={`/${key}`}
                className={`relative px-3 py-2 text-sm font-medium transition-colors rounded-md ${
                  active
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {t(key)}
                {active && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-5 rounded-full bg-primary" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button size="sm" asChild>
            <Link href="/contact">{t("contact")}</Link>
          </Button>
        </div>

        {/* Mobile nav */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="mt-8 flex flex-col gap-4">
              {NAV_ITEMS.map((key) => (
                <Link
                  key={key}
                  href={`/${key}`}
                  className="text-base font-medium transition-colors hover:text-foreground"
                  onClick={() => setOpen(false)}
                >
                  {t(key)}
                </Link>
              ))}
              <Button className="mt-4" asChild>
                <Link href="/contact">{t("contact")}</Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
