import { useCallback } from "react";
import { TextField } from "@mui/material";
import { useRouter } from "next/router";
import styles from "./advize-question-flow9.module.css";
const AdvizeQuestionFlow9 = () => {
  const router = useRouter();

  const onGroupButtonClick = useCallback(() => {
    router.push("/advize-question-flow8");
  }, [router]);

  const onGroupButton1Click = useCallback(() => {
    router.push("/advize-question-flow10");
  }, [router]);

  return (
    <div className={styles.advizeQuestionFlow}>
      <div className={styles.nav}>
        <div className={styles.navBg} />
        <div className={styles.advizerAi}>ADVIZER AI</div>
      </div>
      <div className={styles.whatDoYou}>What do you provide/sell?'</div>
      <button className={styles.rectangleParent} onClick={onGroupButtonClick}>
        <div className={styles.groupChild} />
        <div className={styles.next}>Next</div>
      </button>
      <button className={styles.rectangleGroup} onClick={onGroupButton1Click}>
        <div className={styles.groupItem} />
        <div className={styles.back}>Back</div>
      </button>
      <TextField
        className={styles.usernameInput}
        sx={{ width: 970 }}
        color="primary"
        variant="outlined"
        type="text"
        label="Enter your answer here"
        placeholder="Placeholder"
        size="medium"
        margin="none"
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

export default AdvizeQuestionFlow9;
