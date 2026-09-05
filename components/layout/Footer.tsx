import Link from "next/link";
import { site, footerLinks } from "@/lib/content/site";

function LinkColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <p className="font-mono text-xs uppercase tracking-[0.14em] text-paper/50">{title}</p>
      <ul className="mt-4 flex flex-col gap-2">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="text-sm text-paper/80 hover:text-paper">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto w-full max-w-(--container-content) px-6 py-16 md:px-10">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
          <div className="col-span-2">
            <p className="font-display text-xl">MEDEGNAN CONSULTING</p>
            <p className="mt-3 max-w-xs text-sm text-paper/70">{site.baseline}</p>
            <div className="mt-6 flex flex-col gap-1 text-sm text-paper/80">
              <a href={`mailto:${site.contact.email}`} className="hover:text-paper">
                {site.contact.email}
              </a>
              <a href={`tel:${site.contact.phoneBenin.replace(/\s/g, "")}`} className="hover:text-paper">
                {site.contact.phoneBenin} (Bénin)
              </a>
              <a href={`tel:${site.contact.phoneCoteDIvoire.replace(/\s/g, "")}`} className="hover:text-paper">
                {site.contact.phoneCoteDIvoire} (Côte d&apos;Ivoire)
              </a>
              <p>{site.contact.city}</p>
            </div>
          </div>
          <LinkColumn title="Cabinet" links={footerLinks.cabinet} />
          <LinkColumn title="Solutions" links={footerLinks.solutions} />
          <LinkColumn title="Ressources" links={footerLinks.ressources} />
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-paper/15 pt-6 text-xs text-paper/60 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} MEDEGNAN CONSULTING. Tous droits réservés.</p>
          <ul className="flex flex-wrap gap-4">
            {footerLinks.legal.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-paper/90">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
