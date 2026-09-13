import type { Metadata } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { site } from "@/lib/content/site";
import "./globals.css";

/**
 * Deux familles, sous licence libre, et un rôle chacune.
 *
 * Instrument Serif ne porte que les grands titres. C'est un serif de labeur
 * taillé pour les gros corps, dessiné avec un fort contraste entre pleins et
 * déliés : à 90 px il donne au titre l'autorité d'un imprimé, là où un sans
 * serif reste neutre. Il n'existe qu'en une seule graisse, ce dont les règles
 * `.display-*` tiennent compte : elles fixent `font-weight: 400`, car demander
 * du gras à une police qui n'en a pas force le navigateur à l'épaissir
 * lui-même, et le résultat est sale.
 *
 * Inter porte tout le reste, y compris les chiffres du mur de preuves. Elle est
 * dessinée pour l'écran, ses chiffres sont de même largeur, et elle reste
 * lisible à 12 px là où un serif de titrage s'effondre.
 *
 * Les deux sont téléchargées à la compilation et servies depuis le domaine du
 * site : aucune requête vers un serveur tiers à l'affichage, donc rien à
 * déclarer côté vie privée et une dépendance de moins au chargement.
 */
const serifTitre = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--mc-serif",
});

const sansTexte = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--mc-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://medegnan-consulting.vercel.app"),
  title: {
    default: `${site.name} · ${site.shortBaseline}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  keywords: [
    "cabinet conseil Afrique",
    "cabinet stratégie Afrique",
    "conseil PME Afrique",
    "structuration entreprise Afrique",
    "transformation entreprise Afrique",
    "diagnostic entreprise Afrique",
    "conseil stratégique Bénin",
    "conseil stratégique Afrique francophone",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: site.name,
    title: `${site.name} · ${site.shortBaseline}`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} · ${site.shortBaseline}`,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  description: site.description,
  areaServed: [
    "Bénin",
    "Burkina Faso",
    "Mali",
    "Côte d'Ivoire",
    "France",
    "République démocratique du Congo",
    "Guinée",
    "Tchad",
    "Sénégal",
    "Cameroun",
    "Comores",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cotonou",
    addressCountry: "BJ",
  },
  email: site.contact.email,
  telephone: site.contact.phoneBenin,
  slogan: site.baseline,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      data-scroll-behavior="smooth"
      className={`${serifTitre.variable} ${sansTexte.variable} h-full antialiased`}
    >
      <head>
        {/* Posé avant le premier rendu : les apparitions au défilement ne
            s'activent que si le JavaScript tourne, sans quoi la page reste
            entièrement visible et immobile. */}
        <script
          dangerouslySetInnerHTML={{ __html: `document.documentElement.classList.add("js")` }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#contenu"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
        >
          Aller au contenu
        </a>
        <Header />
        <main id="contenu" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
