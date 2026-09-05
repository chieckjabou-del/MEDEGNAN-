import { site } from "@/lib/content/site";

export function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsapp.digits}?text=${encodeURIComponent(message)}`;
}
