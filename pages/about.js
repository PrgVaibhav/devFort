import Head from "next/head";
import styles from "../styles/about.module.scss";

const About = () => {
  return (
    <>
      <Head>
        <title>About / Dev Fort Community</title>
        <meta
          name="description"
          content="
          Dev Fort is a community where you will get access to all the resources for building projects, like Project Ideas, API resources, Images, Icons, and many more things.
        "
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://devfort.tech" />
        <meta
          property="og:image"
          content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta property="twitter:title" content="Welcome To DevFort" />
        <meta
          property="twitter:description"
          content="Dev Fort is the ultimate destination for web developers seeking the most comprehensive and up-to-date resources to enhance their productivity."
        />
        <meta
          property="twitter:image"
          content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
        />
      </Head>
      <div className={styles.about_container}>
        <div className={styles.about_header}>
          <h1>About DevFort</h1>
        </div>
        <div className={styles.about_content}>
          <p>
            Hello there! Welcome to DevFort. I am so thrilled that you have
            taken the time to visit us and learn more about what we do. Let me
            introduce myself. My name is{" "}
            <a
              href="https://kumarvaibhav.vercel.app/"
              target="_blank"
              aria-label="Portfolio website of vaibhav"
            >
              Vaibhav Kumar
            </a>
            , and I am the founder of this interesting platform. As a web
            developer, I know how challenging it can be to find all the
            necessary resources at one place.
          </p>
          <p>
            That's why I decided to create this website, where web developers
            can find everything they need to create amazing projects. I am
            incredibly passionate about web development, and I believe that the
            right resources can make all the difference in creating a successful
            project.
          </p>
          <p>
            But we're more than just a resource hub. We're a community of
            like-minded individuals who share love for web development. We're
            constantly learning, experimenting, and pushing the boundaries of
            what's possible on the web.
          </p>
          <p>
            Thank you for choosing us as your go-to source for web development
            needs. So whether you're a seasoned pro or just starting out in the
            world of web development, we invite you to join us.
            <blockquote>Let's create something amazing together.</blockquote>
          </p>

          <a
            href="https://twitter.com/_DevFort"
            target="_blank"
            aria-label="Join us on twitter"
            className={styles.about_twitter}
          >
            Follow us on Twitter
          </a>
        </div>
      </div>
    </>
  );
};

export default About;
