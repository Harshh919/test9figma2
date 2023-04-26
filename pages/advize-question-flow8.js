import { useCallback } from "react";
import { useRouter } from "next/router";
import ChooseContainer from "../components/choose-container";
import styles from "./advize-question-flow8.module.css";
const AdvizeQuestionFlow8 = () => {
  const router = useRouter();

  const onGroupDropdownClick = useCallback(() => {
    router.push("/advize-question-flow7");
  }, [router]);

  const onGroupButtonClick = useCallback(() => {
    router.push("/advize-question-flow6");
  }, [router]);

  const onGroupButton1Click = useCallback(() => {
    router.push("/advize-question-flow9");
  }, [router]);

  return (
    <div className={styles.advizeQuestionFlow}>
      <div className={styles.nav}>
        <div className={styles.navBg} />
        <div className={styles.advizerAi}>ADVIZER AI</div>
      </div>
      <div className={styles.whatIsYour}>What is your target age group?</div>
      <button className={styles.rectangleParent} onClick={onGroupButtonClick}>
        <div className={styles.groupChild} />
        <div className={styles.next}>Next</div>
      </button>
      <button className={styles.rectangleGroup} onClick={onGroupButton1Click}>
        <button className={styles.groupItem} />
        <div className={styles.back}>Back</div>
      </button>
      <ChooseContainer
        rectangle21Top="456px"
        rectangle21Left="245px"
        rectangle21Cursor="pointer"
        onGroupContainer2Click={onGroupDropdownClick}
      />
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

export default AdvizeQuestionFlow8;
