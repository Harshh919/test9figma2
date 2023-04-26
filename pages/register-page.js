import { useCallback } from "react";
import { useRouter } from "next/router";
import ADVIZERContainer from "../components/a-d-v-i-z-e-r-container";
import styles from "./register-page.module.css";
const RegisterPage = () => {
  const router = useRouter();

  const onButtonBgClick = useCallback(() => {
    router.push("/sign-in-page");
  }, [router]);

  return (
    <div className={styles.registerPage}>
      <div className={styles.nav}>
        <div className={styles.navBg} />
        <div className={styles.advizerAi}>ADVIZER AI</div>
        <div className={styles.loginBtn}>
          <div className={styles.buttonBg} onClick={onButtonBgClick} />
          <div className={styles.signIn}>Sign In</div>
        </div>
      </div>
      <ADVIZERContainer />
    </div>
  );
};

export default RegisterPage;
