/**
 * Écran de chargement, mis hors service le 13 septembre 2026.
 *
 * Ce fichier vivait en `app/loading.tsx`. À cet emplacement, Next entoure
 * chaque page d'une frontière Suspense : le contenu réel du site part alors
 * dans un conteneur masqué, et seul JavaScript vient le révéler. Un visiteur
 * ou un robot sans JavaScript ne voyait donc que le mot « Chargement… », sur
 * la totalité des pages.
 *
 * Or toutes les pages de ce site sont prérendues à la compilation : il n'y a
 * rien à attendre, et donc rien à faire patienter. La frontière ne servait
 * qu'à masquer.
 *
 * Le dossier `_desactive` commence par un souligné : Next l'exclut du routage,
 * ce fichier n'est donc plus une convention de route, seulement une archive
 * lisible. Pour le remettre en service, il suffit de le replacer en
 * `app/loading.tsx`, mais il faudra alors accepter de nouveau ce défaut.
 */
export default function Loading() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center" role="status" aria-live="polite">
      <span className="font-mono text-xs uppercase tracking-[0.18em] text-ink-faint">Chargement…</span>
    </div>
  );
}
