import { permanentRedirect } from "next/navigation";

/**
 * Le Diagnostic Stratégique est retiré du catalogue.
 *
 * La grille tarifaire en vigueur du cabinet l'a supprimé comme doublon de
 * l'Audit Flash. Le site continuait pourtant de le vendre, avec sa propre page
 * et sa propre fourchette de prix : un visiteur pouvait donc acheter une
 * prestation qui n'existe plus, et découvrir autre chose en arrivant. C'est
 * exactement l'écart que la direction a demandé de fermer.
 *
 * La page n'est pas effacée, elle redirige de façon permanente vers le
 * catalogue. Effacer une adresse déjà publiée la transforme en page d'erreur
 * pour tous ceux qui l'ont en favori, dans un courriel ou dans un devis, et
 * fait perdre au site le référencement qu'elle avait acquis. Une redirection
 * permanente transmet ce référencement à la page d'arrivée.
 */
export default function DiagnosticStrategiquePage() {
  permanentRedirect("/solutions");
}
