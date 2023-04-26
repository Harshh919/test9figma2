import { useCallback } from "react";
import AIAdvizerContainer from "../components/a-i-advizer-container";
import { useRouter } from "next/router";
import styles from "./advize-question-flow5.module.css";
const AdvizeQuestionFlow5 = () => {
  const router = useRouter();

  const onGroupButtonClick = useCallback(() => {
    router.push("/advize-question-flow4");
  }, [router]);

  const onGroupButton1Click = useCallback(() => {
    router.push("/advize-question-flow6");
  }, [router]);

  return (
    <div className={styles.advizeQuestionFlow}>
      <AIAdvizerContainer />
      <div className={styles.yourTargetCountry}>Your target country?</div>
      <button className={styles.rectangleParent} onClick={onGroupButtonClick}>
        <button className={styles.groupChild} />
        <div className={styles.next}>Next</div>
      </button>
      <button className={styles.rectangleGroup} onClick={onGroupButton1Click}>
        <button className={styles.groupItem} />
        <div className={styles.back}>Back</div>
      </button>
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

export default AdvizeQuestionFlow5;
