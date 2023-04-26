import { useMemo } from "react";
import styles from "./username-input-container.module.css";
const UsernameInputContainer = ({ userName, propTop }) => {
  const usernameInputStyle = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div className={styles.usernameInput} style={usernameInputStyle}>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.rounik}>{userName}</div>
      </div>
    </div>
  );
};

export default UsernameInputContainer;
