import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./register-container.module.css";
const RegisterContainer = () => {
  const router = useRouter();

  const onRegisterBtnClick = useCallback(() => {
    router.push("/dashboard");
  }, [router]);

  return (
    <form className={styles.registerCard}>
      <div className={styles.signUpFormCard} />
      <div className={styles.welcomeBackToContainer}>
        <span className={styles.welcomeBackTo}>{`Welcome back to `}</span>
        <span className={styles.a}>A</span>
        <span className={styles.dvizer}>DVIZER</span>
      </div>
      <button className={styles.registerBtn} onClick={onRegisterBtnClick}>
        <button className={styles.registerBtnChild} />
        <div className={styles.signIn}>Sign In</div>
      </button>
      <form className={styles.emailInputParent}>
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

export default RegisterContainer;
