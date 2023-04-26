import { useCallback } from "react";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import styles from "./advize-question-flow12.module.css";
const AdvizeQuestionFlow12 = () => {
  const router = useRouter();

  const onAdvizeQuestionFlowClick = useCallback(() => {
    router.push("/advize-question-flow11");
  }, [router]);

  return (
    <div
      className={styles.advizeQuestionFlow}
      onClick={onAdvizeQuestionFlowClick}
    >
      <div className={styles.nav}>
        <div className={styles.navBg} />
        <div className={styles.advizerAi}>ADVIZER AI</div>
      </div>
      <div className={styles.heyRounik}>
        <span>{`Hey, `}</span>
        <span className={styles.rounik}>Rounik!</span>
      </div>
      <div
        className={styles.letsCreateA}
      >{`Let’s create a personalized Marketing Strategy for your business! `}</div>
      <Button
        className={styles.advizeQuestionFlowChild}
        sx={{ width: 277 }}
        variant="contained"
        color="primary"
      >
        Cool Let’s Start
      </Button>
      <Button
        className={styles.advizeQuestionFlowItem}
        sx={{ width: 277 }}
        variant="contained"
        color="primary"
      >
        Cancel
      </Button>
    </div>
  );
};

export default AdvizeQuestionFlow12;
