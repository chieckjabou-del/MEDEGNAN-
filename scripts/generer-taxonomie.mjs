/**
 * Régénère `lib/content/taxonomie.ts` depuis la base du portail consultant.
 *
 *   SUPABASE_URL=... SUPABASE_KEY=... node scripts/generer-taxonomie.mjs
 *
 * La clé doit pouvoir lire les tables du portail : la vue
 * `taxonomie_sectorielle` est fermée au rôle anonyme, conformément à la
 * posture du portail où rien n'est lisible sans authentification.
 *
 * Ce script n'est PAS exécuté à la construction du site, et c'est
 * délibéré : le site reste autonome, sans variable d'environnement dont
 * l'absence ferait échouer la publication entière. On le lance à la main
 * quand la base a changé, puis on republie.
 *
 * Il rétablit les accents que la base ne stocke pas, par la table de
 * correspondance ci-dessous. Toute valeur inconnue traverse sans
 * modification et doit être ajoutée ici plutôt que corrigée à la main
 * dans le fichier produit, sinon la correction saute à la génération
 * suivante.
 */
const ACCENTS = {
  Elevage: "Élevage",
  Ecole: "École",
  "ONG ou projet finance": "ONG ou projet financé",
  Negoce: "Négoce",
  "Plateforme et immateriel": "Plateforme et immatériel",
  "Capex lourd": "Investissement lourd",
  Perissable: "Périssable",
  "Prix administre": "Prix administré",
  "Reglemente ou sous licence": "Réglementé ou sous licence",
  "Multi-activites": "Multi-activités",
};

const accentue = (v) => ACCENTS[v] ?? v;

const url = process.env.SUPABASE_URL;
const cle = process.env.SUPABASE_KEY;
if (!url || !cle) {
  console.error("SUPABASE_URL et SUPABASE_KEY sont requis.");
  process.exit(1);
}

async function lire(chemin) {
  const r = await fetch(`${url}/rest/v1/${chemin}`, {
    headers: { apikey: cle, Authorization: `Bearer ${cle}` },
  });
  if (!r.ok) throw new Error(`${chemin} : ${r.status} ${await r.text()}`);
  return r.json();
}

const familles = await lire("taxonomie_sectorielle?select=*&order=rang");
const logiques = await lire("logique_economique?select=*&order=code");
const mods = await lire("modificateur?select=*&order=code");

console.log(`familles ${familles.length} · logiques ${logiques.length} · modulateurs ${mods.length}`);
console.log(
  "métiers formulés :",
  familles.reduce((n, f) => n + (f.metiers?.length ?? 0), 0)
);
console.log(
  "\nÀ reporter dans lib/content/taxonomie.ts :\n",
  JSON.stringify(
    familles
      .filter((f) => f.metiers?.length)
      .map((f) => [f.code, f.metiers.map((m) => ({ ...m, metier: accentue(m.metier), logique: accentue(m.logique) }))]),
    null,
    1
  )
);
