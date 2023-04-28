import Link from "next/link";
import styles from "../styles/SectionOne.module.css";
import Image from "next/image";
import SectionImage from "../public/alternate-4.svg";
const SectionOne = () => {
  return (
    <section className={styles.section_container}>
      <div className={styles.section_description}>
        <h2>What we do?</h2>
        <p>
          Finding specific resources for projects can be a bit difficult, but
          not from now because you are at the right place to get all the
          relevant resources for your projects.
        </p>
        <p>
          Dev Fort is a community where you will get access to all the resources
          for building projects, like{" "}
          <span className={styles.special_text}>Project Ideas</span>,{" "}
          <span className={styles.special_text}>API resources</span>,{" "}
          <span className={styles.special_text}>Images</span>,{" "}
          <span className={styles.special_text}>Icons</span>, and many more
          things.
        </p>
        <div className={styles.btn}>
          <Link href="/resources">Get Started</Link>
        </div>
      </div>

      <div className={styles.section_image}>
        <Image
          src={SectionImage}
          alt="section image"
          aria-label="section image"
        />
      </div>
    </section>
  );
};

export default SectionOne;
