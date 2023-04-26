import { useCallback } from "react";
import { useRouter } from "next/router";
import ClothingBrandContainer from "../components/clothing-brand-container";
import styles from "./dashboard-mobile.module.css";
const DashboardMobile = () => {
  const router = useRouter();

  const onGroupContainer1Click = useCallback(() => {
    router.push("/advize-question-flow");
  }, [router]);

  const onGroupContainer3Click = useCallback(() => {
    router.push("/advize-question-flow");
  }, [router]);

  const onGroupContainer5Click = useCallback(() => {
    router.push("/advize-question-flow");
  }, [router]);

  const onGroupContainer7Click = useCallback(() => {
    router.push("/advize-question-flow");
  }, [router]);

  const onMaterialSymbolsaddCircleClick = useCallback(() => {
    router.push("/advize-question-flow12");
  }, [router]);

  const onGroupContainer8Click = useCallback(() => {
    router.push("/dashboard-nav");
  }, [router]);

  return (
    <div className={styles.dashboardMobile}>
      <div className={styles.nav}>
        <div className={styles.navBg} />
        <div className={styles.advizerAi}>ADVIZER AI</div>
      </div>
      <ClothingBrandContainer onGroupContainer1Click={onGroupContainer1Click} />
      <ClothingBrandContainer
        propTop="485px"
        propLeft="46px"
        onGroupContainer1Click={onGroupContainer3Click}
      />
      <ClothingBrandContainer
        propTop="264px"
        propLeft="266px"
        onGroupContainer1Click={onGroupContainer5Click}
      />
      <ClothingBrandContainer
        propTop="488px"
        propLeft="267px"
        onGroupContainer1Click={onGroupContainer7Click}
      />
      <div className={styles.advizeDashboard}>ADVIZE DASHBOARD</div>
      <img
        className={styles.materialSymbolsaddCircleIcon}
        alt=""
        src="/materialsymbolsaddcircle1.svg"
        onClick={onMaterialSymbolsaddCircleClick}
      />
      <div className={styles.rectangleParent} onClick={onGroupContainer8Click}>
        <div className={styles.groupChild} />
        <div className={styles.groupItem} />
        <div className={styles.groupInner} />
      </div>
    </div>
  );
};

export default DashboardMobile;
