import { Breadcrumb } from "@/components/marketing/breadcrumb";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Blf Packaging collects, uses, and protects your personal data. GDPR and CCPA compliant privacy practices.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <Breadcrumb items={[{ label: "Privacy Policy" }]} />
      <h1 className="mt-6 text-3xl font-semibold tracking-tight">Privacy Policy</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Last updated: April 2026
      </p>

      <div className="mt-8 space-y-8 text-sm leading-relaxed text-muted-foreground">
        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">1. Introduction</h2>
          <p>
            Guangzhou Blf Packing Co., Ltd. (&ldquo;Blf Packaging,&rdquo; &ldquo;we,&rdquo;
            &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is committed to protecting your privacy. This
            Privacy Policy explains how we collect, use, disclose, and safeguard your personal
            data when you visit our website blfpack.com (the &ldquo;Site&rdquo;) or submit
            inquiries through our forms.
          </p>
          <p className="mt-2">
            We comply with the EU General Data Protection Regulation (GDPR), the California
            Consumer Privacy Act (CCPA), and applicable Chinese data protection laws.
          </p>
        </section>

        <Separator />

        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">2. Data We Collect</h2>
          <p>We collect the following categories of personal data:</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li><strong className="text-foreground">Inquiry forms:</strong> Name, email address, company name, country, product requirements, and any additional details you voluntarily provide.</li>
            <li><strong className="text-foreground">Automatically collected data:</strong> IP address, browser type, device information, pages visited, and time spent on the Site (via Google Analytics — see Section 7).</li>
            <li><strong className="text-foreground">Cookies:</strong> See our{" "}
              <Link href="/cookie-policy" className="font-medium text-primary hover:underline">
                Cookie Policy
              </Link>{" "}
              for details.</li>
          </ul>
        </section>

        <Separator />

        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">3. How We Use Your Data</h2>
          <p>We use your personal data for the following purposes:</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>To respond to your inquiries and provide quotations</li>
            <li>To communicate about your orders, samples, and projects</li>
            <li>To improve our Site and services through analytics</li>
            <li>To comply with legal obligations</li>
          </ul>
          <p className="mt-2">We do not sell your personal data to third parties.</p>
        </section>

        <Separator />

        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">4. Legal Basis (GDPR)</h2>
          <p>For visitors from the European Economic Area (EEA), our legal basis for processing includes:</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li><strong className="text-foreground">Legitimate interest:</strong> Responding to your business inquiries and improving our services.</li>
            <li><strong className="text-foreground">Consent:</strong> For analytics cookies and marketing communications (which you may withdraw at any time).</li>
            <li><strong className="text-foreground">Contractual necessity:</strong> Processing necessary to fulfill orders or pre-contractual steps you request.</li>
          </ul>
        </section>

        <Separator />

        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">5. Data Retention</h2>
          <p>
            We retain inquiry data for a maximum of 3 years from the last communication, after
            which it is securely deleted. You may request earlier deletion at any time (see
            Section 6).
          </p>
        </section>

        <Separator />

        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">6. Your Rights</h2>
          <p>Depending on your jurisdiction, you may have the right to:</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Access the personal data we hold about you</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data (&ldquo;right to be forgotten&rdquo;)</li>
            <li>Object to or restrict processing of your data</li>
            <li>Request data portability</li>
            <li>Withdraw consent at any time (for consent-based processing)</li>
          </ul>
          <p className="mt-2">
            To exercise any of these rights, contact us at{" "}
            <span className="font-mono text-foreground">privacy@blfpack.com</span>. We will
            respond within 30 days.
          </p>
        </section>

        <Separator />

        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">7. Third-Party Services</h2>
          <p>We use the following third-party services that may process your data:</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li><strong className="text-foreground">Google Analytics:</strong> Website analytics (anonymized IP addresses).</li>
            <li><strong className="text-foreground">Resend:</strong> Transactional email delivery for inquiry notifications.</li>
            <li><strong className="text-foreground">Vercel:</strong> Website hosting and infrastructure.</li>
          </ul>
          <p className="mt-2">
            Each of these services has its own privacy policy and data processing agreements in
            place where required.
          </p>
        </section>

        <Separator />

        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">8. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your
            personal data against unauthorized access, alteration, disclosure, or destruction.
            All data transmission between your browser and our Site is encrypted via HTTPS.
          </p>
        </section>

        <Separator />

        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">9. Contact & Data Controller</h2>
          <p>
            The data controller for this Site is Guangzhou Blf Packing Co., Ltd. For
            privacy-related inquiries or to exercise your rights, contact:
          </p>
          <address className="mt-2 not-italic">
            Email: <span className="font-mono text-foreground">privacy@blfpack.com</span>
            <br />
            Postal: Guangzhou, Guangdong, China
          </address>
        </section>
      </div>
    </div>
  );
}
