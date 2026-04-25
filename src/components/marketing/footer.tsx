import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin } from "lucide-react";

const FOOTER_LINKS = {
  Products: [
    { label: "All Products", href: "/products" },
    { label: "Box by Structure", href: "/products" },
    { label: "Box by Application", href: "/applications" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Why Choose Us", href: "/why-choose-us" },
    { label: "Team", href: "/team" },
    { label: "Trade Shows", href: "/events" },
  ],
  Resources: [
    { label: "Customization", href: "/customization" },
    { label: "FAQ", href: "/faq" },
    { label: "Blog", href: "/blog" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Instant Quote", href: "/instant-quote" },
  ],
  Support: [
    { label: "Contact", href: "/contact" },
    { label: "Request Sample", href: "/samples" },
    { label: "Compliance", href: "/compliance" },
    { label: "Commercial Terms", href: "/commercial-terms" },
    { label: "Supply Chain", href: "/supply-chain" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Cookie Policy", href: "/cookie-policy" },
  ],
};

export function SiteFooter() {
  return (
    <footer className="border-t bg-card px-4 py-14 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <Link href="/" className="text-xl font-semibold tracking-tight">
              Blf Packaging
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Guangzhou Blf Packing Co., Ltd. — Custom paper and gift packaging manufacturer since 2008.
            </p>
            <div className="mt-4 space-y-2 text-sm text-muted-foreground">
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                sales@blfpack.com
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Guangzhou, China
              </p>
            </div>
          </div>

          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h4 className="mb-3 text-sm font-semibold">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8" />

        <p className="text-center text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Guangzhou Blf Packing Co., Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
