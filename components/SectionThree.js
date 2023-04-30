import Image from "next/image";
import styles from "../styles/SectionThree.module.scss";
import alternate from "../public/alternate-2.svg";
const SectionThree = () => {
  return (
    <section className={styles.section_four}>
      <div className={styles.img_container}>
        <Image src={alternate} alt="social" aria-label="Social image" />
      </div>
      <div className={styles.text_container}>
        <h1>What are you waiting for?? Join Our Community now.</h1>
        <a
          href="https://twitter.com/_DevFort"
          aria-label="Twitter Account of DevFort"
          target="_blank"
        >
          Visit DevFort
        </a>
      </div>
    </section>
  );
};

export default SectionThree;
