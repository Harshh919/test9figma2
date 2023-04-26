import Head from "next/head";
import { useCallback } from "react";
import { useRouter } from "next/router";
import UsernameSelector from "../components/username-selector";
import styles from "./advize-question-flow2.module.css";
const AdvizeQuestionFlow2 = () => {
  const router = useRouter();

  const onUsernameInput4Click = useCallback(() => {
    router.push("/advize-question-flow3");
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
      <button className={styles.rectangleParent}>
        <button className={styles.groupChild} autoFocus />
        <div className={styles.back}>Back</div>
      </button>
      <div className={styles.usernameInputParent}>
        <input
          className={styles.usernameInput}
          type="text"
          placeholder="Cost efficient"
          required
        />
        <input
          className={styles.usernameInput1}
          type="text"
          placeholder="Strictly conversion"
          required
        />
        <input
          className={styles.usernameInput2}
          type="text"
          placeholder="More brand awareness"
          required
        />
        <input
          className={styles.usernameInput3}
          type="text"
          placeholder="More traffic on the website"
          required
        />
      </div>
      <UsernameSelector
        onUsernameInputContainer4Click={onUsernameInput4Click}
      />
      <div className={styles.rectangleGroup}>
        <div className={styles.groupItem} />
        <div className={styles.groupInner} />
        <div className={styles.rectangleDiv} />
        <div className={styles.groupChild1} />
        <div className={styles.groupChild2} />
        <div className={styles.groupChild3} />
        <div className={styles.groupChild4} />
        <div className={styles.groupChild5} />
      </div>
      <button className={styles.rectangleContainer} autoFocus>
        <button className={styles.rectangleButton} autoFocus />
        <div className={styles.submit}>Submit</div>
      </button>
    </div>
  );
};

export default AdvizeQuestionFlow2;
