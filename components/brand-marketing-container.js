import { useMemo } from "react";
import styles from "./brand-marketing-container.module.css";
const BrandMarketingContainer = ({ propLeft }) => {
  const groupDiv2Style = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div className={styles.groupWrapper} style={groupDiv2Style}>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <b className={styles.clothingBrandMarketingContainer}>
          <p className={styles.clothingBrand}>Clothing Brand</p>
          <p className={styles.clothingBrand}>Marketing Strategy</p>
        </b>
        <div className={styles.div}>26/04/2023</div>
      </div>
    </div>
  );
};

export default BrandMarketingContainer;
