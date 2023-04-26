import { useCallback } from "react";
import { useRouter } from "next/router";
import WelcomeCard from "../components/welcome-card";
import styles from "./register.module.css";
const Register = () => {
  const router = useRouter();

  const onLoginBtnContainerClick = useCallback(() => {
    router.push("/sign-in");
  }, [router]);

  return (
    <div className={styles.register}>
      <div className={styles.nav}>
        <div className={styles.navBg} />
        <div className={styles.advizerAi}>ADVIZER AI</div>
        <div className={styles.loginBtn} onClick={onLoginBtnContainerClick}>
          <div className={styles.buttonBg} />
          <div className={styles.signIn}>Sign In</div>
        </div>
      </div>
      <WelcomeCard />
    </div>
  );
};

export default Register;
