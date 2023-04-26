import { useCallback } from "react";
import { useRouter } from "next/router";
import WelcomeBackContainer from "../components/welcome-back-container";
import styles from "./sign-in.module.css";
const SignIn = () => {
  const router = useRouter();

  const onLoginBtnContainerClick = useCallback(() => {
    router.push("/register");
  }, [router]);

  return (
    <div className={styles.signIn}>
      <div className={styles.nav}>
        <div className={styles.navBg} />
        <div className={styles.advizerAi}>ADVIZER AI</div>
        <div className={styles.loginBtn} onClick={onLoginBtnContainerClick}>
          <div className={styles.buttonBg} />
          <div className={styles.register}>Register</div>
        </div>
      </div>
      <WelcomeBackContainer />
    </div>
  );
};

export default SignIn;
