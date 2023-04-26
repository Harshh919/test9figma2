import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./a-d-v-i-z-e-r-container.module.css";
const ADVIZERContainer = () => {
  const router = useRouter();

  const onRegisterTextClick = useCallback(() => {
    router.push("/dashboard");
  }, [router]);

  return (
    <form className={styles.registerCard}>
      <div className={styles.signUpFormCard} />
      <div className={styles.welcomeToAdvizerContainer}>
        <span className={styles.welcomeTo}>{`Welcome to `}</span>
        <span className={styles.advizer}>ADVIZER</span>
      </div>
      <button className={styles.registerBtn} autoFocus>
        <button className={styles.registerBtnChild} autoFocus />
        <div className={styles.register} onClick={onRegisterTextClick}>
          Register
        </div>
      </button>
      <div className={styles.usernameInputParent}>
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
      </div>
    </form>
  );
};

export default ADVIZERContainer;
