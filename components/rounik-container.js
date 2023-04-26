import styles from "./rounik-container.module.css";
const RounikContainer = () => {
  return (
    <div className={styles.usernameInputParent}>
      <div className={styles.usernameInput}>
        <div className={styles.usernameInputChild} />
        <div className={styles.rounik}>Rounik</div>
      </div>
      <div className={styles.emailInput}>
        <div className={styles.usernameInputChild} />
        <div className={styles.rounik1020gmailcom}>rounik1020@gmail.com</div>
      </div>
      <div className={styles.passwordInput}>
        <div className={styles.usernameInputChild} />
      </div>
      <img className={styles.passwordIcon} alt="" src="/password.svg" />
    </div>
  );
};

export default RounikContainer;
