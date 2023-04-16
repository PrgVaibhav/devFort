import Image from "next/image";
import styles from "../styles/Home.module.css";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import homeImage from "../public/home1.webp";
const HomeSection = () => {
  return (
    <div className={styles.home_container}>
      <div className={styles.home_left}>
        <h1>
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
        <Image src={homeImage} />
      </div>
      <MdKeyboardDoubleArrowDown className={styles.arrow_down} />
    </div>
  );
};

export default HomeSection;
