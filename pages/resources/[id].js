import Head from "next/head";
import Link from "next/link";
import { BsArrowLeftShort } from "react-icons/bs";
// import styles from "../../styles/Resources.module.css";
import styles from "../../styles/Resource.module.css";

import { BsArrowRightShort } from "react-icons/bs";

const ResourcePage = ({ data, pageName }) => {
  const upperCaseName = pageName.charAt(0).toUpperCase() + pageName.slice(1);
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
        <div className={styles.resources_cards}>
          {data.map((resource) => {
            return (
              <div className={styles.resources_card} key={resource.id}>
                {resource.ideas.map((idea) => {
                  return (
                    <div
                      className={styles.resources_card_description}
                      key={idea.id}
                    >
                      <h3>{idea.name}</h3>
                      <p>{idea.description}</p>
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
    console.log(path.id?.toString());
    return {
      params: {
        id: path.id.toString(),
      },
    };
  });

  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context?.params.id;
  const { resources } = await import("../../data/resource.json");

  const data = resources.filter((resource) => resource.id === id);
  return {
    props: {
      data,
      pageName: id,
    },
  };
}
