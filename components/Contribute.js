import styles from "../styles/contribute.module.scss";

const Contribute = () => {
  return (
    <div className={styles.contribute_container}>
      <p>
        If you have any resources you would like to add to this list, reach us
        at{" "}
        <a
          href="mailto:devFort.work@gmail.com"
          target="_blank"
          aria-label="Mail us"
        >
          mail
        </a>{" "}
        or{" "}
        <a
          href="https://twitter.com/_DevFort"
          target="_blank"
          aria-label="Twitter account of DevFort"
        >
          Twitter
        </a>
      </p>
    </div>
  );
};

export default Contribute;
