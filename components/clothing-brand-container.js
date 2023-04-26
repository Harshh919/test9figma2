import { useMemo } from "react";
import styles from "./clothing-brand-container.module.css";
const ClothingBrandContainer = ({
  propTop,
  propLeft,
  onGroupContainer1Click,
}) => {
  const groupDivStyle = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  return (
    <div
      className={styles.dashboardMobileInner}
      onClick={onGroupContainer1Click}
      style={groupDivStyle}
    >
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.clothingBrandMarketingContainer}>
          <span className={styles.clothingBrandMarketingContainer1}>
            <p className={styles.clothingBrand}>Clothing Brand</p>
            <p className={styles.clothingBrand}>Marketing Strategy</p>
          </span>
        </div>
        <div className={styles.div}>26/04/2023</div>
      </div>
    </div>
  );
};

export default ClothingBrandContainer;
