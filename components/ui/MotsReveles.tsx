/**
 * Découpe une phrase en mots, chacun prêt à être révélé à son tour.
 *
 * Le composant ne porte aucune animation : il se contente de numéroter les
 * mots. Le mouvement est déclenché par le parent, qui doit être un `Reveal`,
 * et décrit dans globals.css. Cette séparation évite un second observateur
 * d'intersection par titre : celui du `Reveal` suffit.
 *
 * Trois garanties tiennent ce composant, et elles sont la raison pour laquelle
 * on ne se contente pas d'un simple `split` dans la vue.
 *
 * 1. Le texte reste un texte. Les mots sont des `span` en ligne, séparés par de
 *    vraies espaces : la phrase se coupe en fin de ligne comme n'importe quel
 *    paragraphe, se sélectionne à la souris, et se lit d'un trait par un
 *    lecteur d'écran. Une découpe en blocs casserait les trois.
 * 2. Rien ne bouge dans la mise en page. Les mots ne changent que d'opacité et
 *    de position, jamais de taille : la hauteur du bloc est la même avant et
 *    après l'animation, donc aucun décalage du contenu qui suit.
 * 3. Sans JavaScript, ou en mouvement réduit, tout est lisible d'emblée :
 *    l'état masqué n'existe que sous la classe `js` posée sur la racine.
 */
export default function MotsReveles({ texte, depart = 0 }: { texte: string; depart?: number }) {
  const mots = texte.split(" ");
  return (
    <>
      {mots.map((mot, i) => (
        <span key={`${mot}-${i}`} data-mot="" style={{ ["--i" as string]: depart + i }}>
          {mot}
          {i < mots.length - 1 ? " " : ""}
        </span>
      ))}
    </>
  );
}
