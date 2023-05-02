import devFortLogo from "../public/devfort.webp";
import styles from "../styles/navbar.module.scss";
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <Image
            src={devFortLogo}
            alt="Logo for dev fort website"
            aria-label="Logo for dev fort website"
            priority={true}
          />
        </Link>
      </div>
      <nav className={styles.navbar}>
        <ul className={styles.nav_links}>
          <li className={styles.nav_link}>
            <Link href="/">Home</Link>
          </li>
          <li className={styles.nav_link}>
            <Link href="/resources">Resources</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
