import { useState, useCallback } from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import { useRouter } from "next/router";
import styles from "./advize-question-flow7.module.css";
const AdvizeQuestionFlow7 = () => {
  const [groupDropdownAnchorEl, setGroupDropdownAnchorEl] = useState(null);
  const router = useRouter();
  const groupDropdownOpen = Boolean(groupDropdownAnchorEl);
  const handleGroupDropdownClick = (event) => {
    setGroupDropdownAnchorEl(event.currentTarget);
  };
  const handleGroupDropdownClose = () => {
    setGroupDropdownAnchorEl(null);
  };

  const onGroupDropdownClick = useCallback(() => {
    router.push("/advize-question-flow8");
  }, [router]);

  return (
    <div className={styles.advizeQuestionFlow}>
      <div className={styles.advizeQuestionFlowChild} />
      <div className={styles.nav}>
        <div className={styles.navBg} />
        <div className={styles.advizerAi}>ADVIZER AI</div>
      </div>
      <div className={styles.whatIsYour}>What is your target age group?</div>
      <button className={styles.rectangleParent}>
        <button className={styles.groupChild} />
        <div className={styles.next}>Next</div>
      </button>
      <button className={styles.rectangleGroup}>
        <button className={styles.groupItem} />
        <div className={styles.back}>Back</div>
      </button>
      <div className={styles.chooseParent} onClick={onGroupDropdownClick}>
        <Button
          sx={{ width: 391 }}
          id="button-Choose"
          aria-controls="menu-Choose"
          aria-haspopup="true"
          aria-expanded={groupDropdownOpen ? "true" : undefined}
          onClick={handleGroupDropdownClick}
          color="primary"
        >
          Choose
        </Button>
        <Menu
          anchorEl={groupDropdownAnchorEl}
          open={groupDropdownOpen}
          onClose={handleGroupDropdownClose}
        />
      </div>
      <div className={styles.to21}>18 to 21</div>
      <div className={styles.to30}>22 to 30</div>
      <div className={styles.andAbove}>35 and above</div>
      <div className={styles.advizeQuestionFlowItem} />
      <div className={styles.advizeQuestionFlowItem} />
      <div className={styles.lineDiv} />
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

export default AdvizeQuestionFlow7;
