import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { site } from "@/lib/content/site";
import "./globals.css";

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
    <html lang="fr" data-scroll-behavior="smooth" className="h-full antialiased">
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
