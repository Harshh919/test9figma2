import { useCallback } from "react";
import { useRouter } from "next/router";
import RegisterContainer from "../components/register-container";
import styles from "./sign-in-page.module.css";
const SignInPage = () => {
  const router = useRouter();

  const onLoginBtnContainerClick = useCallback(() => {
    router.push("/register-page");
  }, [router]);

  return (
    <div className={styles.signInPage}>
      <div className={styles.nav}>
        <div className={styles.navBg} />
        <div className={styles.advizerAi}>ADVIZER AI</div>
        <div className={styles.loginBtn} onClick={onLoginBtnContainerClick}>
          <div className={styles.buttonBg} />
          <div className={styles.register}>Register</div>
        </div>
      </div>
      <RegisterContainer />
    </div>
  );
};

export default SignInPage;
