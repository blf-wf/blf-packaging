import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, Package, FileText } from "lucide-react";

const POPULAR = [
  { href: "/products", label: "Products", icon: Package },
  { href: "/about", label: "About Us", icon: FileText },
];

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="text-7xl font-semibold tracking-tight text-primary/60">404</h1>
      <p className="mt-4 text-lg font-medium">Page not found</p>
      <p className="mt-2 max-w-sm text-sm text-muted-foreground">
        The page you are looking for doesn&apos;t exist or has been moved.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Button asChild>
          <Link href="/">
            <Home className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
        {POPULAR.map((item) => (
          <Button key={item.href} variant="outline" asChild>
            <Link href={item.href}>
              <item.icon className="mr-2 h-4 w-4" />
              {item.label}
            </Link>
          </Button>
        ))}
      </div>
    </div>
  );
}
