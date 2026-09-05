"use client";

import { useState } from "react";
import Link from "next/link";
import type { NavItem } from "@/lib/content/site";

export default function MobileNav({ items }: { items: NavItem[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="xl:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        onClick={() => setOpen((v) => !v)}
        className="flex h-11 w-11 items-center justify-center rounded-sm border border-ink/20"
      >
        <span className="sr-only">Menu</span>
        <svg width="20" height="14" viewBox="0 0 20 14" fill="none" aria-hidden="true">
          {open ? (
            <path d="M1 1L19 13M19 1L1 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          ) : (
            <>
              <path d="M0 1H20" stroke="currentColor" strokeWidth="2" />
              <path d="M0 7H20" stroke="currentColor" strokeWidth="2" />
              <path d="M0 13H20" stroke="currentColor" strokeWidth="2" />
            </>
          )}
        </svg>
      </button>

      {open && (
        <div
          id="mobile-nav-panel"
          className="fixed inset-x-0 top-[var(--header-h,64px)] bottom-0 z-40 overflow-y-auto bg-paper px-6 py-8"
        >
          <nav aria-label="Navigation principale">
            <ul className="flex flex-col gap-1">
              {items.map((item) => (
                <li key={item.href} className="border-b border-line py-3">
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block font-display text-2xl"
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <ul className="mt-2 flex flex-col gap-2 pl-4">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            onClick={() => setOpen(false)}
                            className="block py-1 text-sm text-ink-soft"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-8 flex flex-col gap-3">
            <Link
              href="/demander-un-diagnostic"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center rounded-sm bg-ink px-6 py-3 text-sm font-medium text-paper"
            >
              Demander un diagnostic
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
