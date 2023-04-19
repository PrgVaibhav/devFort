import styles from "../styles/SectionTwo.module.css";
import Image from "next/image";
import social from "../public/section.webp";
import alternate from "../public/alternate-1.svg";
const SectionTwo = () => {
  return (
    <section className={styles.section_container}>
      <div className={styles.section_left}>
        <h2>Motive Behind DevFort?</h2>
        <p>
          The motive behind creating this community is to empower web developers
          with the necessary resources and the support they need to excel in
          their field. We are willing to provide a one-stop destination for all
          the resources that a developer needs to build a project.
        </p>
        <p>
          Join us and add your valuable resources to the community. We are
          always open to new ideas and suggestions. Feel free to contact us.
        </p>
        <div className={styles.section_links}>
          <a
            href="mailto:devFort.work@gmail.com"
            className={styles.section_email}
            aria-label="Mail us"
            title="Mail Us"
          >
            Contact Us
          </a>
          <a
            href="https://twitter.com/_DevFort"
            className={styles.section_twitter}
            aria-label="Follow us on twitter"
            target="_blank"
            title="Twitter"
          >
            Follow Us On Twitter
          </a>
        </div>
      </div>
      <div className={styles.section_right}>
        <Image src={alternate} alt="social image" aria-label="social image" />
      </div>
    </section>
  );
};

export default SectionTwo;
