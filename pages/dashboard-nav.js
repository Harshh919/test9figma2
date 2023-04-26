import styles from "./dashboard-nav.module.css";
const DashboardNav = () => {
  return (
    <div className={styles.dashboardNav}>
      <div className={styles.clothingBrandMarketingStratParent}>
        <b className={styles.clothingBrandMarketingContainer}>
          <span className={styles.clothingBrandMarketingContainer1}>
            <p className={styles.clothingBrand}>Clothing Brand</p>
            <p className={styles.clothingBrand}>Marketing Strategy</p>
          </span>
        </b>
        <div className={styles.div}>26/04/2023</div>
      </div>
      <div className={styles.clothingBrandMarketingStratGroup}>
        <b className={styles.clothingBrandMarketingContainer}>
          <span className={styles.clothingBrandMarketingContainer1}>
            <p className={styles.clothingBrand}>Clothing Brand</p>
            <p className={styles.clothingBrand}>Marketing Strategy</p>
          </span>
        </b>
        <input className={styles.input} type="text" />
      </div>
      <div className={styles.clothingBrandMarketingStratContainer}>
        <b className={styles.clothingBrandMarketingContainer}>
          <span className={styles.clothingBrandMarketingContainer1}>
            <p className={styles.clothingBrand}>Clothing Brand</p>
            <p className={styles.clothingBrand}>Marketing Strategy</p>
          </span>
        </b>
        <strong className={styles.strong}>26/04/2023</strong>
      </div>
      <div className={styles.frameDiv}>
        <b className={styles.clothingBrandMarketingContainer}>
          <span className={styles.clothingBrandMarketingContainer1}>
            <p className={styles.clothingBrand}>Clothing Brand</p>
            <p className={styles.clothingBrand}>Marketing Strategy</p>
          </span>
        </b>
        <input className={styles.input} type="text" />
      </div>
      <div className={styles.advizeDashboard}>ADVIZE DASHBOARD</div>
      <img
        className={styles.materialSymbolsaddCircleIcon}
        alt=""
        src="/materialsymbolsaddcircle.svg"
      />
      <div className={styles.dashboardNavChild} />
      <div className={styles.dashboardNavItem} />
      <div className={styles.vectorParent}>
        <img className={styles.vectorIcon} alt="" src="/vector.svg" />
        <img className={styles.frameChild} alt="" src="/group-221.svg" />
        <div className={styles.profile}>Profile</div>
      </div>
      <div className={styles.homeParent}>
        <div className={styles.home}>Home</div>
        <img className={styles.homeIcon} alt="" src="/home1.svg" />
      </div>
      <div className={styles.nav}>
        <div className={styles.navBg} />
        <div className={styles.advizerAi}>ADVIZER AI</div>
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.frameItem} />
        <div className={styles.frameInner} />
      </div>
    </div>
  );
};

export default DashboardNav;
