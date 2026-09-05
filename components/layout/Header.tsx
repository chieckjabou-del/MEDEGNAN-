import Link from "next/link";
import { primaryNav, site } from "@/lib/content/site";
import MobileNav from "./MobileNav";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-(--container-content) items-center justify-between px-6 md:px-10">
        <Link href="/" className="font-display text-lg tracking-tight">
          MEDEGNAN <span className="text-accent">CONSULTING</span>
        </Link>

        <nav aria-label="Navigation principale" className="hidden md:block">
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

        <div className="hidden items-center gap-3 md:flex">
          <a href={`tel:${site.contact.phoneBenin.replace(/\s/g, "")}`} className="text-sm text-ink-soft hover:text-ink">
            {site.contact.phoneBenin}
          </a>
          <Link
            href="/demander-un-diagnostic"
            className="inline-flex items-center justify-center rounded-sm bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-ink/85"
          >
            Demander un diagnostic
          </Link>
        </div>

        <MobileNav items={primaryNav} />
      </div>
    </header>
  );
}
