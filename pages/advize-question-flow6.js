import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./advize-question-flow6.module.css";
const AdvizeQuestionFlow6 = () => {
  const router = useRouter();

  const onGroupButtonClick = useCallback(() => {
    router.push("/advize-question-flow5");
  }, [router]);

  const onGroupButton1Click = useCallback(() => {
    router.push("/advize-question-flow8");
  }, [router]);

  return (
    <div className={styles.advizeQuestionFlow}>
      <div className={styles.nav}>
        <div className={styles.navBg} />
        <div className={styles.advizerAi}>ADVIZER AI</div>
      </div>
      <div className={styles.chooseThePlatforms}>
        Choose the platforms for your ADs
      </div>
      <button className={styles.rectangleParent} onClick={onGroupButtonClick}>
        <button className={styles.groupChild} />
        <div className={styles.next}>Next</div>
      </button>
      <button className={styles.rectangleGroup} onClick={onGroupButton1Click}>
        <button className={styles.groupItem} />
        <div className={styles.back}>Back</div>
      </button>
      <input className={styles.advizeQuestionFlowChild} type="radio" />
      <img
        className={styles.advizeQuestionFlowItem}
        alt=""
        src="/group-30.svg"
      />
      <input className={styles.advizeQuestionFlowInner} type="radio" />
      <div className={styles.google}>Google</div>
      <div className={styles.facebook}>Facebook</div>
      <input className={styles.groupInput} type="radio" />
      <div className={styles.instagram}>Instagram</div>
      <input className={styles.advizeQuestionFlowChild1} type="radio" />
      <div className={styles.twitter}>Twitter</div>
      <div className={styles.rectangleContainer}>
        <div className={styles.groupInner} />
        <div className={styles.rectangleDiv} />
        <div className={styles.groupChild1} />
        <div className={styles.groupChild2} />
        <div className={styles.groupChild3} />
        <div className={styles.groupChild4} />
        <div className={styles.groupChild5} />
        <div className={styles.groupChild6} />
      </div>
    </div>
  );
};

export default AdvizeQuestionFlow6;
