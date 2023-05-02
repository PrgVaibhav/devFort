import Image from "next/image";
import styles from "../styles/Home.module.scss";
import homeImage from "../public/alternate3.svg";

const HomeSection = () => {
  return (
    <>
      <div className={styles.home_container} id="home">
        <div className={styles.home_left}>
          <h1 className={styles.home_header}>
            Welcome to <span className={styles.special_header}>Dev Fort</span>
          </h1>
          <p>
            Dev Fort is the ultimate destination for web developers seeking the
            most comprehensive and up-to-date resources to enhance their
            productivity.
          </p>
          <p>
            We take pride in providing a supportive and inclusive community that
            provides necessary things to start a web dev project and encourages
            sharing of knowledge and experiences.
          </p>
        </div>
        <div className={styles.home_right}>
          <Image
            src={homeImage}
            alt="home page image showing community"
            aria-label="home page showing community"
            priority={true}
            sizes="100vw 100vh (max-width: 768px) 100vw, 768px  100vh (max-width: 1024px) 768px, 1024px 100vh (max-width: 1280px) 1024px, 1280px  100vh (max-width: 1536px) 1280px, 1536px  100vh (max-width: 1920px) 1536px, 1920px  100vh (max-width: 2560px) 1920px, 2560px  100vh (max-width: 3840px) 2560px, 3840px  100vh (max-width: 5120px) 3840px, 5120px  100vh (max-width: 6400px) 5120px, 6400px  100vh (max-width: 7680px) 6400px, 7680px  100vh (max-width: 8960px) 7680px, 8960px  100vh (max-width: 10240px) 8960px, 10240px  100vh (max-width: 11520px) 10240px, 11520px  100vh (max-width: 12800px) 11520px, 12800px  100vh (max-width: 14080px) 12800px, 14080px  100vh (max-width: 15360px) 14080px, 15360px  100vh (max-width: 16640px) 15360px, 16640px  100vh (max-width: 17920px) 16640px, 17920px  100vh (max-width: 19200px) 17920px, 19200px  100vh (max-width: 20480px) 19200px, 20480px  100vh (max-width: 21760px) 20480px, 21760px  100vh (max-width: 23040px) 21760px, 23040px  100vh (max-width: 24320px) 23040px, 24320px  100vh (max-width: 25600px) 24320px, 25600px  100vh"
          />
        </div>
      </div>
    </>
  );
};

export default HomeSection;
