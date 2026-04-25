"use client";

import { useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { TurnstileWidget } from "@/components/marketing/turnstile-widget";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { submitQuote } from "@/actions/quote";

const quoteSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  email: z.string().email("Valid email required"),
  company: z.string().min(1, "Company is required").max(200),
  country: z.string().min(2, "Country is required"),
  boxType: z.string().min(1, "Box type is required"),
  quantity: z.string().min(1, "Quantity is required"),
  dimensions: z.string().min(1, "Dimensions are required"),
  comments: z.string().optional(),
});

type QuoteFormData = z.infer<typeof quoteSchema>;

const BOX_TYPES = [
  "Magnetic / Foldable Rigid Box",
  "Lid and Base / Setup Box",
  "Drawer Box",
  "Mailer / Shipping Box",
  "Folding Carton",
  "Specialty Box",
];

const QUANTITIES = ["500–1,000", "1,000–5,000", "5,000–10,000", "10,000–50,000", "50,000+"];

export function CtaQuote() {
  const [result, setResult] = useState<{ ok: boolean; message: string } | null>(null);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);

  const handleTurnstileToken = useCallback((token: string) => {
    setTurnstileToken(token);
  }, []);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
  });

  const onSubmit = async (data: QuoteFormData) => {
    setResult(null);
    const res = await submitQuote({ ...data, turnstileToken: turnstileToken ?? undefined });
    setResult({ ok: res.ok, message: res.ok ? res.message : (res.error ?? "Unknown error") });
    if (res.ok) reset();
  };

  return (
    <section className="border-t-2 border-primary/15 bg-primary/5 px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Get a Quick Quote
          </h2>
          <p className="mt-3 text-muted-foreground">
            Fill in the details below and we'll respond within 2 working hours (GMT+8).
          </p>
        </div>

        {result ? (
          <div
            className={`mb-8 rounded-lg border p-6 text-center ${
              result.ok
                ? "border-green-200 bg-green-50"
                : "border-destructive/30 bg-destructive/5"
            }`}
          >
            {result.ok ? (
              <CheckCircle className="mx-auto mb-2 h-8 w-8 text-green-600" />
            ) : (
              <AlertCircle className="mx-auto mb-2 h-8 w-8 text-destructive" />
            )}
            <p className={`text-sm ${result.ok ? "text-green-800" : "text-destructive"}`}>
              {result.message}
            </p>
            {!result.ok && (
              <Button
                variant="link"
                size="sm"
                className="mt-2"
                onClick={() => setResult(null)}
              >
                Try again
              </Button>
            )}
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="grid gap-6 sm:grid-cols-2">
            {/* Name */}
            <div className="space-y-1.5">
              <Label htmlFor="name">Name *</Label>
              <Input id="name" {...register("name")} placeholder="Your full name" />
              {errors.name && (
                <p className="text-sm text-destructive">{errors.name.message}</p>
              )}
            </div>

            {/* Email */}
            <div className="space-y-1.5">
              <Label htmlFor="email">Email *</Label>
              <Input id="email" type="email" {...register("email")} placeholder="you@company.com" />
              {errors.email && (
                <p className="text-sm text-destructive">{errors.email.message}</p>
              )}
            </div>

            {/* Company */}
            <div className="space-y-1.5">
              <Label htmlFor="company">Company *</Label>
              <Input id="company" {...register("company")} placeholder="Company name" />
              {errors.company && (
                <p className="text-sm text-destructive">{errors.company.message}</p>
              )}
            </div>

            {/* Country */}
            <div className="space-y-1.5">
              <Label htmlFor="country">Country / Region *</Label>
              <Input id="country" {...register("country")} placeholder="e.g. Germany, United States" />
              {errors.country && (
                <p className="text-sm text-destructive">{errors.country.message}</p>
              )}
            </div>

            {/* Box Type */}
            <div className="space-y-1.5">
              <Label>Box Type *</Label>
              <Select onValueChange={(v) => setValue("boxType", v)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select box type" />
                </SelectTrigger>
                <SelectContent>
                  {BOX_TYPES.map((bt) => (
                    <SelectItem key={bt} value={bt}>
                      {bt}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.boxType && (
                <p className="text-sm text-destructive">{errors.boxType.message}</p>
              )}
            </div>

            {/* Quantity */}
            <div className="space-y-1.5">
              <Label>Quantity *</Label>
              <Select onValueChange={(v) => setValue("quantity", v)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select quantity range" />
                </SelectTrigger>
                <SelectContent>
                  {QUANTITIES.map((q) => (
                    <SelectItem key={q} value={q}>
                      {q}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.quantity && (
                <p className="text-sm text-destructive">{errors.quantity.message}</p>
              )}
            </div>

            {/* Dimensions */}
            <div className="space-y-1.5 sm:col-span-2">
              <Label htmlFor="dimensions">Dimensions (L × W × H) *</Label>
              <Input
                id="dimensions"
                {...register("dimensions")}
                placeholder="e.g. 200 × 150 × 80 mm"
              />
              {errors.dimensions && (
                <p className="text-sm text-destructive">{errors.dimensions.message}</p>
              )}
            </div>

            {/* Comments */}
            <div className="space-y-1.5 sm:col-span-2">
              <Label htmlFor="comments">Additional Details</Label>
              <Textarea
                id="comments"
                {...register("comments")}
                placeholder="Printing preferences, material requirements, target market, etc."
                rows={3}
              />
            </div>

            {/* Turnstile */}
            <div className="sm:col-span-2">
              <TurnstileWidget
                onToken={handleTurnstileToken}
                onExpire={() => setTurnstileToken(null)}
                onError={() => setTurnstileToken(null)}
              />
            </div>

            {/* Submit */}
            <div className="sm:col-span-2">
              <Button type="submit" disabled={isSubmitting} className="w-full gap-2 sm:w-auto">
                <Send className="h-4 w-4" />
                {isSubmitting ? "Submitting..." : "Submit Inquiry"}
              </Button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
