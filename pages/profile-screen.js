import AccountFilter from "../components/account-filter";
import styles from "./profile-screen.module.css";
const ProfileScreen = () => {
  return (
    <div className={styles.profileScreen}>
      <div className={styles.profileScreenInner}>
        <div className={styles.groupChild} />
      </div>
      <img className={styles.homeIcon} alt="" src="/home.svg" />
      <div className={styles.nav}>
        <div className={styles.navBg} />
        <div className={styles.advizerAi}>ADVIZER AI</div>
      </div>
      <img className={styles.profileScreenChild} alt="" src="/group-22.svg" />
      <div className={styles.profileScreenItem} />
      <div className={styles.helloRounik}>
        <span>{`Hello, `}</span>
        <span className={styles.rounik}>Rounik!</span>
      </div>
      <AccountFilter />
      <img className={styles.passwordIcon} alt="" src="/password1.svg" />
    </div>
  );
};

export default ProfileScreen;
