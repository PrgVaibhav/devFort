import Head from "next/head";
import styles from "../styles/Resources.module.css";
import Link from "next/link";

import { BsArrowRightShort } from "react-icons/bs";
const Resources = () => {
  return (
    <>
      <Head>
        <title>Resources | Dev Fort</title>
        <meta name="description" content="Resources section by Dev Fort" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className={styles.resources_container}>
        <div className={styles.resources_cards}>
          <div className={styles.resources_card}>
            <div className={styles.resources_card_description}>
              <h3>Project Ideas</h3>
              <p>
                Finding projects to build is a difficult task, thats why we are
                going to provide project ideas so that you can start building
                your projects sooner.
              </p>
              <Link href="/resources">
                Read More <BsArrowRightShort className={styles.arrow} />
              </Link>
            </div>
          </div>
          <div className={styles.resources_card}>
            <div className={styles.resources_card_description}>
              <h3>Project Ideas</h3>
              <p>
                Finding projects to build is a difficult task, thats why we are
                going to provide project ideas so that you can start building
                your projects sooner.
              </p>
              <Link href="/resources">
                Read More <BsArrowRightShort className={styles.arrow} />
              </Link>
            </div>
          </div>
          <div className={styles.resources_card}>
            <div className={styles.resources_card_description}>
              <h3>Project Ideas</h3>
              <p>
                Finding projects to build is a difficult task, thats why we are
                going to provide project ideas so that you can start building
                your projects sooner.
              </p>
              <Link href="/resources">
                Read More <BsArrowRightShort className={styles.arrow} />
              </Link>
            </div>
          </div>
          <div className={styles.resources_card}>
            <div className={styles.resources_card_description}>
              <h3>Project Ideas</h3>
              <p>
                Finding projects to build is a difficult task, thats why we are
                going to provide project ideas so that you can start building
                your projects sooner.
              </p>
              <Link href="/resources">
                Read More <BsArrowRightShort className={styles.arrow} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resources;
