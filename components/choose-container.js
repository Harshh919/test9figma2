import { useState, useMemo } from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import styles from "./choose-container.module.css";
const ChooseContainer = ({
  rectangle21Top,
  rectangle21Left,
  rectangle21Cursor,
  onGroupContainer2Click,
}) => {
  const [groupDropdownAnchorEl, setGroupDropdownAnchorEl] = useState(null);
  const groupDiv1Style = useMemo(() => {
    return {
      top: rectangle21Top,
      left: rectangle21Left,
      cursor: rectangle21Cursor,
    };
  }, [rectangle21Top, rectangle21Left, rectangle21Cursor]);

  const groupDropdownOpen = Boolean(groupDropdownAnchorEl);
  const handleGroupDropdownClick = (event) => {
    setGroupDropdownAnchorEl(event.currentTarget);
  };
  const handleGroupDropdownClose = () => {
    setGroupDropdownAnchorEl(null);
  };

  return (
    <div
      className={styles.chooseParent}
      style={groupDiv1Style}
      onClick={onGroupContainer2Click}
    >
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
  );
};

export default ChooseContainer;
