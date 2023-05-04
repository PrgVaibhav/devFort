import Image from "next/image";
import error from "../public/error.svg";
import styles from "../styles/404.module.scss";
import Seo from "@/components/Seo";

const Error = () => {
  return (
    <>
      <Seo title="404 / Dev Fort" description="404 page not found" />
      <div className={styles.error_container}>
        <Image
          src={error}
          alt="Error Page Not Found"
          aria-label="Error page not found"
          loading="lazy"
        />
      </div>
    </>
  );
};

export default Error;
