import styles from "../styles/about.module.css";

const About = () => {
  return (
    <div className={styles.about_container}>
      <div className={styles.about_header}>
        <h1>About DevFort</h1>
      </div>
      <div className={styles.about_content}>
        <p>
          Hello there! Welcome to DevFort. I am so thrilled that you have taken
          the time to visit us and learn more about what we do. Let me introduce
          myself. My name is{" "}
          <a
            href="https://kumarvaibhav.vercel.app/"
            target="_blank"
            aria-label="Portfolio website of vaibhav"
          >
            Vaibhav Kumar
          </a>
          , and I am the founder of this interesting platform. As a web
          developer, I know how challenging it can be to find all the necessary
          resources at one place.
        </p>
        <p>
          That's why I decided to create this website, where web developers can
          find everything they need to create amazing projects. I am incredibly
          passionate about web development, and I believe that the right
          resources can make all the difference in creating a successful
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
      </div>
    </div>
  );
};

export default About;
