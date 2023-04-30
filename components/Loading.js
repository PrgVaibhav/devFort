import styles from "../styles/Loading.module.css";
const LoadingScreen = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.loader_bar}></div>
      <div className={styles.loader_bar}></div>
      <div className={styles.loader_bar}></div>
      <div className={styles.loader_bar}></div>
      <div className={styles.loader_bar}></div>
    </div>
  );
};

export default LoadingScreen;
