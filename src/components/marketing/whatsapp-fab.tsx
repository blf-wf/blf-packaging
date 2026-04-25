import { MessageCircle } from "lucide-react";

export function WhatsAppFAB() {
  const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  if (!phone) return null;

  const message = encodeURIComponent(
    "Hi, I'm interested in custom packaging. Could you provide more information?"
  );

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all hover:scale-110 hover:shadow-xl"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
