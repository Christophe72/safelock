import React from "react";
import styles from "./footer.module.css";

/**
 * Composant Footer qui affiche la section pied de page de l'application.
 *
 * Ce composant inclut :
 * - L'année en cours générée dynamiquement.
 * - Un avis de copyright pour l'application "SafeLock".
 * - Une attribution à l'auteur avec le nom "Christophe Développement".
 *
 * @returns {JSX.Element} Le composant pied de page rendu.
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.copyright}>
          &copy; {currentYear} - SafeLock - Tous droits réservés
        </p>
        <p className={styles.author}>
          Développé par <span className={styles.name}>Chris Développement</span>
        </p>
      </div>
    </footer>
  );
}
