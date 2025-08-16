import React from "react";
import Link from "next/link";
import styles from "./navbar.module.css"; // Importez en tant que module avec nom

/**
 * Composant NavBar
 *
 * Ce composant affiche une barre de navigation pour l'application SafeLock.
 * Il inclut des liens vers différentes sections de l'application telles que la page d'accueil,
 * le tableau de bord et les paramètres.
 *
 * @returns {JSX.Element} Le composant de barre de navigation rendu.
 *
 * @remarques
 * - Le composant utilise des modules CSS pour le style, avec des styles importés sous le nom `styles`.
 * - La barre de navigation inclut un lien logo et un menu avec trois éléments de navigation.
 *
 * @example
 * ```tsx
 * import NavBar from './navbar';
 *
 * function App() {
 *   return (
 *     <div>
 *       <NavBar />
 *     </div>
 *   );
 * }
 * ```
 */
export default function NavBar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles["navbar-container"]}>
        <Link href="/safelock" className={styles["navbar-logo"]}>
          SafeLock
        </Link>
        <ul className={styles["navbar-menu"]}>
          <li className={styles["navbar-item"]}>
            <Link href="/" className={styles["navbar-link"]}>
              Accueil
            </Link>
          </li>
          <li className={styles["navbar-item"]}>
            <Link href="/dashboard" className={styles["navbar-link"]}>
              Tableau de bord
            </Link>
          </li>
          <li className={styles["navbar-item"]}>
            <Link href="/settings" className={styles["navbar-link"]}>
              Paramètres
            </Link>
          </li>
          <li className={styles["navbar-item"]}>
            <Link href="/contact" className={styles["navbar-link"]}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
