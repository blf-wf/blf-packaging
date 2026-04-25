import { Breadcrumb } from "@/components/marketing/breadcrumb";
import { CtaQuote } from "@/components/marketing/cta-quote";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Blf Packaging for custom paper packaging solutions. Quick quote response within 2 working hours (GMT+8).",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <Breadcrumb items={[{ label: "Contact" }]} />
      <h1 className="mt-6 text-3xl font-semibold tracking-tight">Contact Us</h1>
      <p className="mt-2 max-w-2xl text-muted-foreground">
        Ready to start your packaging project? Reach out via the form below, email, or WhatsApp.
      </p>

      {/* Contact info cards */}
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="flex items-start gap-3 p-5">
            <Mail className="mt-0.5 h-5 w-5 text-primary/60" />
            <div>
              <h3 className="font-semibold text-sm">Email</h3>
              <p className="text-sm text-muted-foreground">sales@blfpack.com</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-start gap-3 p-5">
            <Phone className="mt-0.5 h-5 w-5 text-primary/60" />
            <div>
              <h3 className="font-semibold text-sm">WhatsApp</h3>
              <p className="text-sm text-muted-foreground">+86 (020) XXXX-XXXX</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-start gap-3 p-5">
            <MapPin className="mt-0.5 h-5 w-5 text-primary/60" />
            <div>
              <h3 className="font-semibold text-sm">Address</h3>
              <p className="text-sm text-muted-foreground">Guangzhou, Guangdong, China</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-start gap-3 p-5">
            <Clock className="mt-0.5 h-5 w-5 text-primary/60" />
            <div>
              <h3 className="font-semibold text-sm">Response Time</h3>
              <p className="text-sm text-muted-foreground">Within 2 hours (GMT+8)</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <CtaQuote />
    </div>
  );
}
