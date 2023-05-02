import Head from "next/head";
import styles from "/styles/Resources.module.scss";
import Link from "next/link";

import { BsArrowRightShort } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { useState } from "react";
import Contribute from "@/components/Contribute";
const Resources = ({ data }) => {
  const [search, setSearch] = useState("");
  const searchHandler = (e) => {
    setSearch(e.target.value.toLowerCase());
  };
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
        <div className={styles.search}>
          <input
            type="text"
            placeholder="Images, Icons, Illustrations, etc."
            onChange={searchHandler}
          />
          <BiSearchAlt className={styles.search_icon} />
        </div>
        <div className={styles.resources_cards}>
          {data
            .filter((item) => {
              if (item.name === null || item.name === undefined) return false;
              return search.toLowerCase() === ""
                ? item
                : item.name.toLowerCase().includes(search);
            })
            .map((item) => {
              return (
                <div className={styles.resources_card} key={item.id}>
                  <div className={styles.resources_card_description}>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    {item.id && (
                      <Link href={`/resources/${item.id}`}>
                        Read More <BsArrowRightShort className={styles.arrow} />
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <Contribute />
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
