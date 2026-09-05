# MEDEGNAN CONSULTING — Site institutionnel

Site officiel de MEDEGNAN CONSULTING, cabinet panafricain de stratégie, structuration et transformation d'entreprises. Next.js 16 (App Router) + React 19 + TypeScript + Tailwind CSS 4.

## Démarrer en local

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — serveur de développement
- `npm run build` — build de production
- `npm run start` — sert le build de production
- `npm run lint` — ESLint

## Structure

- `app/` — pages et routes (App Router), une route par dossier
- `components/layout/` — Header, Footer, navigation mobile
- `components/ui/` — système de design (Section, Container, Button, Stat, cartes, formulaires)
- `components/forms/` — formulaire de qualification (`/demander-un-diagnostic`)
- `lib/content/` — couche de contenu centralisée (offres, méthodologie, études de cas, coordonnées, navigation) — à éditer sans toucher aux composants

## Contenu et sources

Tout le contenu publié provient d'une recherche documentaire vérifiée (Google Drive du cabinet). Les données confidentielles (noms de clients réels, chiffres d'affaires exacts, formules de scoring propriétaires) ont été volontairement exclues, anonymisées ou arrondies. Voir `lib/content/case-studies.ts` pour la logique d'anonymisation des études de cas.

## Formulaire de qualification

Le formulaire `/demander-un-diagnostic` ne s'appuie sur aucun backend : il compose un e-mail pré-rempli (`mailto:`) à destination de l'adresse officielle du cabinet. Aucune donnée n'est stockée côté serveur.
