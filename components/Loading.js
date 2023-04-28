import styles from "../styles/Loading.module.css";
const LoadingScreen = () => {
  return (
    <div class={styles.loader}>
      <div class={styles.loader_bar}></div>
      <div class={styles.loader_bar}></div>
      <div class={styles.loader_bar}></div>
      <div class={styles.loader_bar}></div>
      <div class={styles.loader_bar}></div>
    </div>
  );
};

export default LoadingScreen;
