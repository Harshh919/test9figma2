import { useState } from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import styles from "./username-selector.module.css";
const UsernameSelector = ({ onUsernameInputContainer4Click }) => {
  const [usernameInput4AnchorEl, setUsernameInput4AnchorEl] = useState(null);
  const usernameInput4Open = Boolean(usernameInput4AnchorEl);
  const handleUsernameInput4Click = (event) => {
    setUsernameInput4AnchorEl(event.currentTarget);
  };
  const handleUsernameInput4Close = () => {
    setUsernameInput4AnchorEl(null);
  };

  return (
    <div
      className={styles.usernameInput}
      onClick={onUsernameInputContainer4Click}
    >
      <Button
        sx={{ width: 970 }}
        id="button-Choose"
        aria-controls="menu-Choose"
        aria-haspopup="true"
        aria-expanded={usernameInput4Open ? "true" : undefined}
        onClick={handleUsernameInput4Click}
        color="primary"
      >
        Choose
      </Button>
      <Menu
        anchorEl={usernameInput4AnchorEl}
        open={usernameInput4Open}
        onClose={handleUsernameInput4Close}
      />
    </div>
  );
};

export default UsernameSelector;
