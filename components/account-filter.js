import UsernameInputContainer from "./username-input-container";
import styles from "./account-filter.module.css";
const AccountFilter = () => {
  return (
    <form className={styles.registerCard}>
      <div className={styles.signUpFormCard} />
      <div className={styles.accountDetails}>Account Details</div>
      <div className={styles.registerBtn}>
        <div className={styles.registerBtnInner}>
          <div className={styles.registerBtnInner}>
            <div className={styles.groupChild} />
            <div className={styles.edit}>Edit</div>
          </div>
        </div>
      </div>
      <div className={styles.passwordInputWrapper}>
        <div className={styles.passwordInput}>
          <div className={styles.passwordInput}>
            <UsernameInputContainer userName="Rounik" />
            <UsernameInputContainer propTop="82.14px" />
            <div className={styles.rectangleWrapper}>
              <div className={styles.groupItem} />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AccountFilter;
