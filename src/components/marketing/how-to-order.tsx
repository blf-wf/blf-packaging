import { MessageSquare, PenTool, Factory, Truck } from "lucide-react";

const STEPS = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Share Your Vision",
    description:
      "Tell us your box dimensions, reference samples, brand aesthetic, and target market (EU, US, etc.). Our team will recommend the optimal structure and materials within hours.",
  },
  {
    number: "02",
    icon: PenTool,
    title: "Professional Proofing",
    description:
      "We create dieline drawings, 3D renderings, and physical samples for your approval. Confirm the structure, printing, and finishing before production begins.",
  },
  {
    number: "03",
    icon: Factory,
    title: "Precision Production",
    description:
      "Your order enters our ISO 9001 production line with IQC, IPQC, and OQC quality checks at every stage. AQL 2.5 sampling standards ensure batch consistency.",
  },
  {
    number: "04",
    icon: Truck,
    title: "Fast & Secure Delivery",
    description:
      "Products are packed in reinforced 5-layer corrugated cartons with corner protection. We coordinate with your freight forwarder and provide loading photos and documentation.",
  },
];

export function HowToOrder() {
  return (
    <section className="bg-muted/30 px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            How to Order
          </h2>
          <p className="mt-3 text-muted-foreground">
            From concept to delivery — four simple steps to start your packaging project.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step) => (
            <div key={step.number} className="relative text-center">
              <div className="mb-4 flex justify-center">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-lg font-bold text-primary">
                  {step.number}
                </span>
              </div>
              <step.icon className="mx-auto mb-3 h-8 w-8 text-primary/40" />
              <h3 className="text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
