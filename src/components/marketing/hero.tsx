import { getTranslations } from "next-intl/server";
import { Button } from "@/components/ui/button";
import { ArrowRight, Box } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { heroFactory } from "@/lib/images";

export async function Hero() {
  const t = await getTranslations("Home");

  return (
    <section className="relative flex flex-col items-center justify-center px-4 pb-20 pt-28 sm:pb-28 sm:pt-36 lg:pb-36 lg:pt-44">
      {/* Brand accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-primary/60" />

      {/* Hero background image */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <Image
          src={heroFactory}
          alt=""
          fill
          className="object-cover opacity-25"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
      </div>

      {/* Decorative blur accents */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-20 left-0 h-[400px] w-[400px] rounded-full bg-accent/30 blur-3xl" />
      </div>

      <div className="max-w-3xl space-y-8 text-center">
        <div className="space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full border bg-card px-4 py-1.5 text-xs font-medium text-muted-foreground shadow-sm">
            <Box className="h-3.5 w-3.5 text-primary" />
            Guangzhou Blf Packing Co., Ltd.
          </span>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            {t("heroTitle")}
          </h1>
        </div>
        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
          {t("heroSubtitle")}
        </p>
        <div className="flex flex-col items-center gap-3 pt-2 sm:flex-row sm:justify-center">
          <Button size="lg" className="gap-2 shadow-sm" asChild>
            <Link href="/contact">
              {t("ctaQuote")}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/samples">{t("ctaSample")}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
