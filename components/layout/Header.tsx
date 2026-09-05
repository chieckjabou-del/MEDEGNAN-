import Link from "next/link";
import { primaryNav, site } from "@/lib/content/site";
import { whatsappLink } from "@/lib/whatsapp";
import MobileNav from "./MobileNav";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-(--container-content) items-center justify-between px-6 md:px-10">
        <Link href="/" className="font-display text-lg tracking-tight">
          MEDEGNAN <span className="text-accent">CONSULTING</span>
        </Link>

        <nav aria-label="Navigation principale" className="hidden xl:block">
          <ul className="flex items-center gap-1">
            {primaryNav.map((item) =>
              item.children ? (
                <li key={item.href} className="relative">
                  <details className="group">
                    <summary className="flex cursor-pointer list-none items-center gap-1 rounded-sm px-3 py-2 text-sm text-ink-soft marker:content-[''] hover:text-ink">
                      {item.label}
                      <svg width="8" height="5" viewBox="0 0 8 5" fill="none" aria-hidden="true" className="mt-0.5">
                        <path d="M1 1L4 4L7 1" stroke="currentColor" strokeWidth="1.4" />
                      </svg>
                    </summary>
                    <ul className="absolute left-0 top-full z-10 mt-1 w-64 border border-line bg-paper py-2 shadow-sm">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="block px-4 py-2 text-sm text-ink-soft hover:bg-paper-raised hover:text-ink"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                </li>
              ) : (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block rounded-sm px-3 py-2 text-sm text-ink-soft hover:text-ink"
                  >
                    {item.label}
                  </Link>
                </li>
              )
            )}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <a href={`tel:${site.contact.phoneBenin.replace(/\s/g, "")}`} className="text-sm text-ink-soft hover:text-ink">
            {site.contact.phoneBenin}
          </a>
          <a
            href={whatsappLink("Bonjour, je souhaite échanger avec MEDEGNAN CONSULTING.")}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contacter MEDEGNAN sur WhatsApp"
            className="flex h-9 w-9 items-center justify-center rounded-sm border border-ink/20 text-ink-soft hover:border-ink hover:text-ink"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2Zm5.8 14.13c-.24.68-1.4 1.32-1.94 1.4-.5.08-1.12.11-1.8-.11-.42-.13-.96-.31-1.65-.6-2.9-1.25-4.79-4.16-4.94-4.35-.14-.2-1.18-1.57-1.18-3 0-1.43.75-2.13 1.02-2.42.26-.29.57-.36.76-.36.19 0 .38 0 .55.01.17.01.41-.07.64.49.24.58.81 2 .88 2.14.07.14.12.31.02.5-.09.19-.14.31-.28.48-.14.17-.29.37-.42.5-.14.14-.28.29-.12.57.16.28.71 1.17 1.52 1.9 1.05.94 1.93 1.23 2.21 1.37.28.14.44.12.6-.07.17-.19.71-.83.9-1.11.19-.28.38-.23.63-.14.26.1 1.64.77 1.92.91.28.14.47.21.53.33.07.12.07.68-.17 1.35Z" />
            </svg>
          </a>
          <Link
            href="/demander-un-diagnostic"
            className="inline-flex items-center justify-center rounded-sm bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-ink/85"
          >
            Réserver mon Audit Flash
          </Link>
        </div>
        <Link
          href="/demander-un-diagnostic"
          className="hidden items-center justify-center rounded-sm bg-ink px-4 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-ink/85 sm:inline-flex xl:hidden"
        >
          Audit Flash
        </Link>

        <MobileNav items={primaryNav} />
      </div>
    </header>
  );
}
