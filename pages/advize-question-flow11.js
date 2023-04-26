import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./advize-question-flow11.module.css";
const AdvizeQuestionFlow11 = () => {
  const router = useRouter();

  const onGroupButtonClick = useCallback(() => {
    router.push("/advize-question-flow10");
  }, [router]);

  const onGroupButton1Click = useCallback(() => {
    router.push("/advize-question-flow12");
  }, [router]);

  return (
    <div className={styles.advizeQuestionFlow}>
      <div className={styles.nav}>
        <div className={styles.navBg} />
        <div className={styles.advizerAi}>ADVIZER AI</div>
      </div>
      <div className={styles.whichBusinessDo}>Which business do you own?</div>
      <input
        className={styles.usernameInput}
        type="text"
        placeholder="ex : Clothing store"
        required
      />
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

export default AdvizeQuestionFlow11;
