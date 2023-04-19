import Image from "next/image";
import error from "../public/error.svg";
import styles from "../styles/404.module.css";

const Error = () => {
  return (
    <div className={styles.error_container}>
      <Image
        src={error}
        alt="Error Page Not Found"
        aria-label="Error page not found"
        loading="lazy"
      />
    </div>
  );
};

export default Error;
