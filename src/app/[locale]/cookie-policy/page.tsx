import { Breadcrumb } from "@/components/marketing/breadcrumb";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "How Blf Packaging uses cookies on our website. Information about cookie types, purposes, and how to manage your preferences.",
};

const COOKIES = [
  {
    category: "Necessary Cookies",
    purpose: "Essential for the website to function. These cannot be disabled.",
    items: [
      { name: "session", provider: "Blf Packaging", duration: "Session", description: "Maintains your browsing session" },
      { name: "cookie_consent", provider: "Blf Packaging", duration: "12 months", description: "Stores your cookie preferences" },
    ],
  },
  {
    category: "Analytics Cookies",
    purpose: "Help us understand how visitors use our site. Only set with your consent.",
    items: [
      { name: "_ga, _ga_*", provider: "Google Analytics", duration: "24 months", description: "Distinguishes visitors and tracks site usage" },
      { name: "_gid", provider: "Google Analytics", duration: "24 hours", description: "Groups user behavior by session" },
    ],
  },
  {
    category: "Marketing Cookies",
    purpose: "Used for advertising and remarketing. Only set with your consent.",
    items: [
      { name: "_fbp", provider: "Meta / Facebook", duration: "90 days", description: "Facebook Pixel for ad targeting and conversion tracking" },
      { name: "li_sugr", provider: "LinkedIn", duration: "90 days", description: "LinkedIn Insight Tag for B2B audience targeting" },
    ],
  },
];

export default function CookiePolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <Breadcrumb items={[{ label: "Cookie Policy" }]} />
      <h1 className="mt-6 text-3xl font-semibold tracking-tight">Cookie Policy</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Last updated: April 2026
      </p>

      <div className="mt-8 space-y-8 text-sm leading-relaxed">
        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">1. What Are Cookies?</h2>
          <p className="text-muted-foreground">
            Cookies are small text files placed on your device when you visit a website. They are
            widely used to make websites work efficiently and provide information to site owners.
          </p>
        </section>

        <Separator />

        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">2. How We Use Cookies</h2>
          <p className="text-muted-foreground">
            We use cookies for the following purposes: to ensure the Site functions correctly
            (necessary cookies), to analyze how visitors use our Site (analytics cookies, only
            with your consent), and for advertising and remarketing (marketing cookies, only with
            your consent).
          </p>
        </section>

        <Separator />

        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">3. Cookies We Use</h2>
          <div className="mt-4 space-y-4">
            {COOKIES.map((cat) => (
              <Card key={cat.category}>
                <CardContent className="p-5">
                  <h3 className="text-base font-semibold text-foreground">{cat.category}</h3>
                  <p className="mt-1 text-muted-foreground">{cat.purpose}</p>

                  <div className="mt-3 overflow-x-auto">
                    <table className="w-full text-left text-sm">
                      <thead>
                        <tr className="border-b text-xs uppercase text-muted-foreground">
                          <th className="pb-2 pr-3 font-medium">Cookie</th>
                          <th className="pb-2 pr-3 font-medium">Provider</th>
                          <th className="pb-2 pr-3 font-medium">Duration</th>
                          <th className="pb-2 font-medium">Purpose</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cat.items.map((c) => (
                          <tr key={c.name} className="border-b last:border-0">
                            <td className="py-2 pr-3 font-mono text-xs text-foreground">{c.name}</td>
                            <td className="py-2 pr-3 text-muted-foreground">{c.provider}</td>
                            <td className="py-2 pr-3 text-muted-foreground">{c.duration}</td>
                            <td className="py-2 text-muted-foreground">{c.description}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator />

        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">4. Managing Cookies</h2>
          <p className="text-muted-foreground">
            When you first visit our Site, a cookie banner allows you to accept or decline
            non-essential cookies. You can change your preferences at any time by clearing your
            browser cookies and revisiting the Site to see the banner again, or by adjusting your
            browser settings.
          </p>
          <p className="mt-2 text-muted-foreground">
            Most browsers allow you to block or delete cookies through their settings. Note that
            disabling necessary cookies may affect the functionality of the Site.
          </p>
        </section>

        <Separator />

        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            5. Contact
          </h2>
          <p className="text-muted-foreground">
            For questions about this Cookie Policy, contact us at{" "}
            <span className="font-mono text-foreground">privacy@blfpack.com</span> or see our{" "}
            <Link href="/privacy-policy" className="font-medium text-primary hover:underline">
              Privacy Policy
            </Link>{" "}
            for full data protection details.
          </p>
        </section>
      </div>
    </div>
  );
}
