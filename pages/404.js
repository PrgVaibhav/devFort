import Image from "next/image";
import error from "../public/error.svg";
import styles from "../styles/404.module.scss";
import Head from "next/head";

const Error = () => {
  return (
    <>
      <Head>
        <title>404 | Dev Fort</title>
        <meta name="description" content="404 page not found" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
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
