import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { SiteHeader } from "@/components/marketing/header";
import { SiteFooter } from "@/components/marketing/footer";
import { WhatsAppFAB } from "@/components/marketing/whatsapp-fab";
import { CookieBanner } from "@/components/marketing/cookie-banner";

export default async function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
      <WhatsAppFAB />
      <CookieBanner />
    </NextIntlClientProvider>
  );
}
