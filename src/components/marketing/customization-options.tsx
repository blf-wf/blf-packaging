import { Card, CardContent } from "@/components/ui/card";
import {
  FileText,
  LayoutGrid,
  Sparkles,
  Printer,
} from "lucide-react";

const CATEGORIES = [
  {
    icon: FileText,
    title: "Materials",
    options: [
      "White card (SBS / FBB)",
      "Grey chipboard",
      "Kraft paper",
      "Specialty paper",
      "Corrugated board",
    ],
  },
  {
    icon: LayoutGrid,
    title: "Inserts",
    options: [
      "EVA foam",
      "Sponge / PU foam",
      "Paperboard tray",
      "Velvet / flocked lining",
      "PET / PVC tray",
    ],
  },
  {
    icon: Sparkles,
    title: "Special Finishes",
    options: [
      "Hot foil stamping",
      "Embossing / Debossing",
      "Spot UV / Full UV",
      "Matte / Gloss lamination",
      "Laser engraving",
    ],
  },
  {
    icon: Printer,
    title: "Printing",
    options: [
      "Offset (CMYK)",
      "Pantone spot color",
      "Digital (short runs)",
      "Silk screen",
      "Gradient / metallic",
    ],
  },
];

export function CustomizationOptions() {
  return (
    <section className="bg-muted/50 px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Customization Options
          </h2>
          <p className="mt-3 text-muted-foreground">
            Choose from our full range of materials, inserts, finishes, and
            printing techniques — every detail tailored to your brand.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((cat) => (
            <Card key={cat.title} className="border transition-all duration-300 hover:border-primary/40 hover:shadow-sm">
              <CardContent className="p-6">
                <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/10">
                  <cat.icon className="h-5 w-5 text-primary" />
                </span>
                <h3 className="mb-3 text-lg font-semibold">{cat.title}</h3>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  {cat.options.map((opt) => (
                    <li key={opt} className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-primary/40" />
                      {opt}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
