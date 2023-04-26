import ChooseContainer from "./choose-container";
import styles from "./a-i-advizer-container.module.css";
const AIAdvizerContainer = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.navBg} />
      <div className={styles.advizerAi}>ADVIZER AI</div>
      <ChooseContainer />
    </div>
  );
};

export default AIAdvizerContainer;
