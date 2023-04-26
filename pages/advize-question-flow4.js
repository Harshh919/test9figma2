import { useState, useCallback } from "react";
import { Button, Menu, MenuItem, TextField } from "@mui/material";
import { useRouter } from "next/router";
import styles from "./advize-question-flow4.module.css";
const AdvizeQuestionFlow4 = () => {
  const [groupDropdownAnchorEl, setGroupDropdownAnchorEl] = useState(null);
  const router = useRouter();
  const groupDropdownOpen = Boolean(groupDropdownAnchorEl);
  const handleGroupDropdownClick = (event) => {
    setGroupDropdownAnchorEl(event.currentTarget);
  };
  const handleGroupDropdownClose = () => {
    setGroupDropdownAnchorEl(null);
  };

  const onGroupButtonClick = useCallback(() => {
    router.push("/advize-question-flow3");
  }, [router]);

  const onGroupButton1Click = useCallback(() => {
    router.push("/advize-question-flow5");
  }, [router]);

  return (
    <div className={styles.advizeQuestionFlow}>
      <div className={styles.nav}>
        <div className={styles.navBg} />
        <div className={styles.advizerAi}>ADVIZER AI</div>
      </div>
      <div className={styles.currencyParent}>
        <Button
          sx={{ width: 223.82550048828125 }}
          id="button-Currency"
          aria-controls="menu-Currency"
          aria-haspopup="true"
          aria-expanded={groupDropdownOpen ? "true" : undefined}
          onClick={handleGroupDropdownClick}
          color="primary"
        >
          Currency
        </Button>
        <Menu
          anchorEl={groupDropdownAnchorEl}
          open={groupDropdownOpen}
          onClose={handleGroupDropdownClose}
        />
      </div>
      <TextField
        className={styles.advizeQuestionFlowChild}
        sx={{ width: 601 }}
        color="primary"
        variant="filled"
        type="text"
        label="Amount"
        placeholder="Placeholder"
        size="medium"
        margin="none"
      />
      <div className={styles.whatIsYour}>What is your monthly budget?</div>
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

export default AdvizeQuestionFlow4;
