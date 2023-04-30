import Image from "next/image";
import styles from "../styles/Home.module.scss";
import homeImage from "../public/alternate3.svg";

const HomeSection = () => {
  return (
    <>
      <div className={styles.home_container} id="home">
        <div className={styles.home_left}>
          <h1 className={styles.home_header}>
            Welcome to <span className={styles.special_header}>Dev Fort</span>
          </h1>
          <p>
            Dev Fort is the ultimate destination for web developers seeking the
            most comprehensive and up-to-date resources to enhance their
            productivity.
          </p>
          <p>
            We take pride in providing a supportive and inclusive community that
            provides necessary things to start a web dev project and encourages
            sharing of knowledge and experiences.
          </p>
        </div>
        <div className={styles.home_right}>
          <Image
            src={homeImage}
            alt="home page image showing community"
            aria-label="home page showing community"
            priority={true}
          />
        </div>
      </div>
    </>
  );
};

export default HomeSection;
