import Head from "next/head";
import styles from "/styles/Resources.module.css";
import Link from "next/link";

import { BsArrowRightShort } from "react-icons/bs";
const Resources = ({ data }) => {
  return (
    <>
      <Head>
        <title>Resources | Dev Fort</title>
        <meta name="description" content="Resources section by Dev Fort" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className={styles.resources_container}>
        <h1>Resources</h1>
        <div className={styles.resources_cards}>
          {data.map((item) => {
            return (
              <div className={styles.resources_card} key={item.id}>
                <div className={styles.resources_card_description}>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <Link href={`/resources/${item.id}`}>
                    Read More <BsArrowRightShort className={styles.arrow} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Resources;

export async function getStaticProps() {
  const { all_resources } = await import("../../data/resource.json");
  return {
    props: {
      data: all_resources,
    },
  };
}
