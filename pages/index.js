import { useCallback } from "react";
import RounikContainer from "../components/rounik-container";
import { useRouter } from "next/router";
import styles from "./index.module.css";
const ProfileNav = () => {
  const router = useRouter();

  const onGroupContainer5Click = useCallback(() => {
    router.push("/profile-mobile");
  }, [router]);

  const onGroupContainer6Click = useCallback(() => {
    router.push("/profile-mobile");
  }, [router]);

  const onGroupContainer7Click = useCallback(() => {
    router.push("/dashboard-mobile");
  }, [router]);

  return (
    <div className={styles.profileNav}>
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
      <div className={styles.groupParent} onClick={onGroupContainer5Click}>
        <div className={styles.rectangleWrapper}>
          <div className={styles.groupItem} />
        </div>
        <div className={styles.rectangleContainer}>
          <div className={styles.groupInner} />
        </div>
      </div>
      <button className={styles.profileNavChild} />
      <button className={styles.profileNavItem} />
      <div className={styles.vectorParent} onClick={onGroupContainer6Click}>
        <img className={styles.vectorIcon} alt="" src="/vector.svg" />
        <img className={styles.groupIcon} alt="" src="/group-22.svg" />
        <div className={styles.profile}>Profile</div>
      </div>
      <div className={styles.homeParent} onClick={onGroupContainer7Click}>
        <div className={styles.home}>Home</div>
        <img className={styles.homeIcon} alt="" src="/home.svg" />
      </div>
    </div>
  );
};

export default ProfileNav;
