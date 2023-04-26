import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./welcome-card.module.css";
const WelcomeCard = () => {
  const router = useRouter();

  const onRectangleButtonClick = useCallback(() => {
    router.push("/dashboard-mobile");
  }, [router]);

  return (
    <form className={styles.registerCard}>
      <div className={styles.signUpFormCard} />
      <div className={styles.welcomeToAdvizerContainer}>
        <span className={styles.welcomeToAdvizerContainer1}>
          <span className={styles.welcomeTo}>{`Welcome to `}</span>
          <span className={styles.advizerAi}>ADVIZER AI</span>
        </span>
      </div>
      <form className={styles.registerBtn}>
        <button
          className={styles.registerBtnChild}
          onClick={onRectangleButtonClick}
        />
        <div className={styles.register}>Register</div>
      </form>
      <form className={styles.usernameInputParent}>
        <input
          className={styles.usernameInput}
          type="text"
          placeholder="Username"
          required
        />
        <input
          className={styles.emailInput}
          type="text"
          placeholder="Email"
          required
        />
        <input
          className={styles.passwordInput}
          type="text"
          placeholder="Password"
          required
        />
      </form>
    </form>
  );
};

export default WelcomeCard;
