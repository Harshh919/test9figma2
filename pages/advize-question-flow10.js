import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./advize-question-flow10.module.css";
const AdvizeQuestionFlow10 = () => {
  const router = useRouter();

  const onGroupButtonClick = useCallback(() => {
    router.push("/advize-question-flow9");
  }, [router]);

  const onGroupButton1Click = useCallback(() => {
    router.push("/advize-question-flow11");
  }, [router]);

  return (
    <div className={styles.advizeQuestionFlow}>
      <div className={styles.nav}>
        <div className={styles.navBg} />
        <div className={styles.advizerAi}>ADVIZER AI</div>
      </div>
      <div className={styles.chooseTheType}>
        Choose the type of your business
      </div>
      <button className={styles.rectangleParent} onClick={onGroupButtonClick}>
        <button className={styles.groupChild} />
        <div className={styles.next}>Next</div>
      </button>
      <button className={styles.rectangleGroup} onClick={onGroupButton1Click}>
        <button className={styles.groupItem} />
        <div className={styles.back}>Back</div>
      </button>
      <div className={styles.groupParent}>
        <img className={styles.groupInner} alt="" src="/group-28.svg" />
        <img className={styles.groupIcon} alt="" src="/group-30.svg" />
        <img className={styles.groupChild1} alt="" src="/group-28.svg" />
        <div className={styles.sales}>Sales</div>
        <div className={styles.service}>Service</div>
      </div>
      <div className={styles.rectangleContainer}>
        <div className={styles.rectangleDiv} />
        <div className={styles.groupChild2} />
        <div className={styles.groupChild3} />
        <div className={styles.groupChild4} />
        <div className={styles.groupChild5} />
        <div className={styles.groupChild6} />
        <div className={styles.groupChild7} />
        <div className={styles.groupChild8} />
      </div>
    </div>
  );
};

export default AdvizeQuestionFlow10;
