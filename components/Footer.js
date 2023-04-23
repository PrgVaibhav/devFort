import Image from "next/image";
import logo from "../public/devfort.webp";
import styles from "../styles/Footer.module.css";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_container}>
        <div className={styles.footer_left_logo}>
          <Image src={logo} alt="DevFort Logo" />
        </div>
        <div className={styles.footer_left}>
          <div className={styles.footer_left_details}>
            <h3>DevFort</h3>
            <p>
              Community for developers who are passionate about learning and
              building in public.
            </p>
            <a
              href="https://twitter.com/_DevFort"
              aria-label="Twitter Account of DevFort"
              target="_blank"
            >
              Visit DevFort
            </a>
          </div>
        </div>
        <div className={styles.footer_details}>
          <div className={styles.footer_center_details}>
            <h3>Quick Links</h3>
            <ul>
              <li>
                <Link href="/credit">Credits</Link>
              </li>
              <li>
                <Link href="/team">Team</Link>
              </li>
              <li>
                <Link href="/updates">Update</Link>
              </li>
              <li>
                <Link href="/resources">Resources</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.footer_details}>
          <div className={styles.footer_center_details}>
            <h3>Connect</h3>
            <ul>
              <li>
                <a
                  href="https://github.com/prgVaibhav"
                  target="_blank"
                  aria-label="GitHub account of creator of DevFort"
                >
                  Creator
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/_DevFort"
                  target="_blank"
                  aria-label="Twitter account of DevFort"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/PrgVaibhav/devFort"
                  target="_blank"
                  aria-label="GitHub account of DevFort"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="mailto:devFort.work@gmail.com"
                  target="_blank"
                  aria-label="Mail us"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.footer_bottom}>
        <span>© 2023 DevFort. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
