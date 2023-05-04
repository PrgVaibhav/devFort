import styles from "../styles/Credit.module.css";
import Seo from "@/components/Seo";
const Credit = () => {
  return (
    <>
      <Seo
        title="Credit / DevFort Community"
        description="
        Credit for the resources used in DevFort Community"
      />
      <div className={styles.credit_container}>
        <div className={styles.credit_description}>
          <h1>Credits</h1>
          <p>
            I would like to thank the websites from where I have retrieved the
            resources for making this website possible. This website is built
            using Next.js and CSS. The illustrations are from Storyset. The logo
            is made using Canva. The favicon is made using Favicon.io. The fonts
            are from Google Fonts. The code is hosted on Vercel. The website is
            built by{" "}
            <a
              href="https://kumarvaibhav.vercel.app/"
              aria-label="DevFort creator portfolio website"
              target="_blank"
            >
              Vaibhav Kumar
            </a>
            .
          </p>
        </div>

        <div className={styles.credit_resources}>
          <p>Images are used from</p>
          <a href="https://storyset.com/data">Data illustrations by Storyset</a>
          <a href="https://storyset.com/people">
            People illustrations by Storyset
          </a>
        </div>
      </div>
    </>
  );
};

export default Credit;
