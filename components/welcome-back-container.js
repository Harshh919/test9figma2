import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./welcome-back-container.module.css";
const WelcomeBackContainer = () => {
  const router = useRouter();

  const onSignInTextClick = useCallback(() => {
    router.push("/dashboard-mobile");
  }, [router]);

  return (
    <form className={styles.registerCard}>
      <div className={styles.signUpFormCard} />
      <div className={styles.welcomeBackToContainer}>
        <span className={styles.welcomeBackToContainer1}>
          <span className={styles.welcomeBackTo}>{`Welcome back to `}</span>
          <span className={styles.advizer}>ADVIZER</span>
        </span>
      </div>
      <div className={styles.emailInputParent}>
        <input
          className={styles.emailInput}
          type="text"
          placeholder="rounik1020@gmai.com"
          required
        />
        <input
          className={styles.passwordInput}
          type="text"
          placeholder="Password"
          required
        />
      </div>
      <button className={styles.registerBtn}>
        <button className={styles.registerBtnChild} />
        <div className={styles.signIn} onClick={onSignInTextClick}>
          Sign In
        </div>
      </button>
    </form>
  );
};

export default WelcomeBackContainer;
