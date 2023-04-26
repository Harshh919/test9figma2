import { useCallback } from "react";
import RounikContainer from "../components/rounik-container";
import { useRouter } from "next/router";
import styles from "./profile-mobile.module.css";
const ProfileMobile = () => {
  const router = useRouter();

  const onGroupContainer3Click = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className={styles.profileMobile}>
      <div className={styles.nav}>
        <div className={styles.navBg} />
        <div className={styles.advizerAi}>ADVIZER AI</div>
      </div>
      <div className={styles.registerCard}>
        <div className={styles.signUpFormCard} />
        <div className={styles.accountDetails}>Account Details</div>
        <RounikContainer />
        <div className={styles.registerBtn}>
          <div className={styles.registerBtnInner}>
            <div className={styles.registerBtnInner}>
              <div className={styles.groupChild} />
              <div className={styles.edit}>Edit</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.helloRounik}>
        <span>{`Hello, `}</span>
        <span className={styles.rounik}>Rounik!</span>
      </div>
      <div className={styles.rectangleGroup} onClick={onGroupContainer3Click}>
        <div className={styles.groupItem} />
        <div className={styles.groupInner} />
        <div className={styles.rectangleDiv} />
      </div>
    </div>
  );
};

export default ProfileMobile;
