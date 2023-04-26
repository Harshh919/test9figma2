import styles from "./advize-question-flow.module.css";
const AdvizeQuestionFlow = () => {
  return (
    <div className={styles.advizeQuestionFlow}>
      <div className={styles.nav}>
        <div className={styles.navBg} />
        <div className={styles.advizerAi}>ADVIZER AI</div>
      </div>
      <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
      <div
        className={styles.increaseTrafficOn}
      >{`Increase Traffic on Clothing Brand `}</div>
      <div className={styles.div}>10/10/2023</div>
      <img
        className={styles.advizeQuestionFlowChild}
        alt=""
        src="/group-2.svg"
      />
    </div>
  );
};

export default AdvizeQuestionFlow;
