import NavBar from "../../components/navbar";
import Footer from "../../components/footer";
import DisjoncteurSelector from "../../components/DisjoncteurSelector";
import CableSectionSelector from "../../components/CableSectionSelector";

/**
 * Le composant `safelook` sert de mise en page principale pour l'application Safelock.
 * Il organise la page en trois sections principales : une barre de navigation, une zone de contenu,
 * et un pied de page. La zone de contenu inclut deux sélecteurs : `CableSectionSelector` et
 * `DisjoncteurSelector`, qui sont affichés dans une mise en page réactive basée sur flexbox.
 *
 * @returns {JSX.Element} La structure JSX de la page Safelock.
 */
/**
 * Le composant `safelook` sert de mise en page principale pour la page de l'application SafeLock.
 * Il organise la page en trois sections principales :
 *
 * 1. **NavBar** : Une barre de navigation affichée en haut de la page.
 * 2. **Zone de contenu** : Un conteneur flexible qui inclut les composants `CableSectionSelector`
 *    et `DisjoncteurSelector`, disposés dans une mise en page réactive en ligne.
 * 3. **Footer** : Un pied de page affiché en bas de la page.
 *
 * La mise en page est stylisée pour garantir un alignement, un espacement et une réactivité appropriés :
 * - La page utilise une disposition en colonne avec une hauteur minimale de 100% de la hauteur de la fenêtre.
 * - La zone de contenu est centrée horizontalement et permet un retour à la ligne pour les écrans plus petits.
 * - La largeur maximale de la zone de contenu est limitée à 1200px, avec des marges automatiques.
 *
 * @returns Un élément JSX représentant la mise en page de la page de l'application SafeLock.
 */
export default function SafeLock() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <NavBar />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: "2rem",
          flexWrap: "wrap",
          width: "100%",
          maxWidth: 1200,
          margin: "2rem auto",
        }}
      >
        <CableSectionSelector />
        <DisjoncteurSelector />
      </div>
      <Footer />
    </div>
  );
}
