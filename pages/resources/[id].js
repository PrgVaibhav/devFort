import Head from "next/head";
import Link from "next/link";
import { BsArrowLeftShort } from "react-icons/bs";
import styles from "../../styles/Resource.module.css";
import { useState } from "react";

import { BsArrowRightShort } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";

const ResourcePage = ({ data, pageName }) => {
  const [search, setSearch] = useState("");
  const upperCaseName = pageName.charAt(0).toUpperCase() + pageName.slice(1); // converting the first letter of the page name to uppercase

  const searchHandler = (e) => {
    // search handler
    setSearch(e.target.value.toLowerCase());
  };

  const type = data.map((resource) => {
    // mapping through the resources
    return resource.ideas.map((idea) => {
      // mapping through the ideas
      return idea.type;
    });
  });

  return (
    <>
      <Head>
        <title>{upperCaseName} | Dev Fort</title>
        <meta name="description" content="Resources section by Dev Fort" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className={styles.resources_container}>
        <div className={styles.resources_top}>
          <Link href="/resources" className={styles.go_back}>
            <BsArrowLeftShort /> Back
          </Link>
        </div>
        {data.map((resource) => {
          return (
            <div className={styles.resources_header} key={resource.id}>
              <h1>{resource.name}</h1>
              <p>{resource.description}</p>
            </div>
          );
        })}
        {type && (
          <div className={styles.search}>
            <input
              type="text"
              placeholder="Paid, Free, etc"
              onChange={searchHandler}
            />
            <BiSearchAlt className={styles.search_icon} />
          </div>
        )}
        <div className={styles.resources_cards}>
          {data.map((resource) => {
            if (resource.ideas === null || resource.ideas === undefined)
              return false;

            if (resource.id === null || resource.id === undefined) return false;
            // mapping through the resources
            return (
              <div className={styles.resources_card} key={resource.id}>
                {resource.ideas
                  .filter((resource) => {
                    if (resource.type === null || resource.type === undefined)
                      return false;

                    return search.toLowerCase() === ""
                      ? resource // if search is empty, return all resources
                      : resource.type.toLowerCase().includes(search); // if search is not empty, return the resources that match the search
                  })
                  .map((idea) => {
                    if (idea.type === null || idea.type === undefined)
                      return false;

                    return (
                      // mapping through the ideas
                      <div
                        className={styles.resources_card_description}
                        key={idea.id}
                      >
                        <h3>{idea.name}</h3>
                        <p>{idea.description}</p>
                        {idea.type && (
                          <span className={styles.type}>{idea.type}</span>
                        )}
                        {idea.url && (
                          <a
                            href={idea.url}
                            aria-label={idea.description}
                            target="_blank"
                            title={idea.name}
                          >
                            {idea.name}{" "}
                            <BsArrowRightShort className={styles.arrow} />
                          </a>
                        )}
                      </div>
                    );
                  })}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ResourcePage;

// Getting the paths for the static pages using getStaticPaths function and passing the paths to the getStaticProps function to get the data for the page using the id from the params. :)

export async function getStaticPaths() {
  const { all_resources } = await import("../../data/resource.json");
  const allPaths = all_resources.map((path) => {
    if (path.id === null || path.id === undefined) return false;

    return {
      params: {
        id: path.id.toString(),
      },
    };
  });

  return {
    // returning the paths
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  // getting the data for the page
  const id = context?.params.id;
  const { resources } = await import("../../data/resource.json");

  const data = resources.filter((resource) => resource.id === id);
  return {
    // returning the data for the page
    props: {
      data,
      pageName: id,
    },
  };
}
