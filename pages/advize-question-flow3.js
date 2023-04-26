import { useCallback } from "react";
import { useRouter } from "next/router";
import UsernameSelector from "../components/username-selector";
import styles from "./advize-question-flow3.module.css";
const AdvizeQuestionFlow3 = () => {
  const router = useRouter();

  const onUsernameInputClick = useCallback(() => {
    router.push("/advize-question-flow2");
  }, [router]);

  const onGroupButtonClick = useCallback(() => {
    router.push("/advize-question-flow1");
  }, [router]);

  const onGroupButton1Click = useCallback(() => {
    router.push("/advize-question-flow4");
  }, [router]);

  return (
    <div className={styles.advizeQuestionFlow}>
      <div className={styles.nav}>
        <div className={styles.navBg} />
        <div className={styles.advizerAi}>ADVIZER AI</div>
      </div>
      <div className={styles.whatDoYou}>
        What do you want to achieve from your marketing campaign?
      </div>
      <button className={styles.rectangleParent} onClick={onGroupButtonClick}>
        <button className={styles.groupChild} />
        <div className={styles.submit}>Submit</div>
      </button>
      <button
        className={styles.rectangleGroup}
        autoFocus
        onClick={onGroupButton1Click}
      >
        <button className={styles.groupItem} autoFocus />
        <div className={styles.back}>Back</div>
      </button>
      <UsernameSelector onUsernameInputContainer4Click={onUsernameInputClick} />
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

export default AdvizeQuestionFlow3;
