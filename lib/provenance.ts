/**
 * La provenance d'une demande (6 octobre 2026, migration crm1 du Portail).
 *
 * À la première page vue dans l'onglet, on garde d'où vient la visite : les
 * paramètres de campagne (utm_source, utm_medium, utm_campaign, utm_content),
 * le site qui a envoyé le visiteur et la page d'arrivée. Le formulaire de
 * diagnostic les joint à la demande, pour que le cabinet sache quelle
 * publication convertit. Rien d'autre n'est lu, rien ne quitte l'onglet avant
 * l'envoi du formulaire, et le Portail n'en garde que ces six clés.
 */
const CLE = "medegnan-provenance";
const UTM = ["utm_source", "utm_medium", "utm_campaign", "utm_content"] as const;

export type Provenance = Partial<Record<(typeof UTM)[number] | "referent" | "page", string>>;

export function memoriserProvenance(): void {
  try {
    if (sessionStorage.getItem(CLE)) return;
    const url = new URL(window.location.href);
    const p: Provenance = {};
    for (const k of UTM) {
      const v = url.searchParams.get(k);
      if (v) p[k] = v.slice(0, 200);
    }
    if (document.referrer) {
      try {
        const r = new URL(document.referrer);
        if (r.host !== url.host) p.referent = r.host;
      } catch {
        /* référent illisible : ignoré */
      }
    }
    p.page = url.pathname.slice(0, 200);
    sessionStorage.setItem(CLE, JSON.stringify(p));
  } catch {
    /* stockage indisponible : la demande part sans provenance */
  }
}

export function lireProvenance(): Provenance | null {
  try {
    const s = sessionStorage.getItem(CLE);
    return s ? (JSON.parse(s) as Provenance) : null;
  } catch {
    return null;
  }
}
