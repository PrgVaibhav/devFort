import styles from "/styles/Resources.module.scss";
import Link from "next/link";

import { BsArrowRightShort } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { useState } from "react";
import Contribute from "@/components/Contribute";
import Seo from "@/components/Seo";
const Resources = ({ data }) => {
  const [search, setSearch] = useState("");
  const searchHandler = (e) => {
    setSearch(e.target.value.toLowerCase());
  };
  return (
    <>
      <Seo
        title="Resources / Dev Fort"
        description="
        Resources section for developers at Dev Fort
      "
      />
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
