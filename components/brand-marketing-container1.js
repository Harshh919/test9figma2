import { useMemo } from "react";
import styles from "./brand-marketing-container1.module.css";
const BrandMarketingContainer1 = ({
  propLeft,
  propCursor,
  propCursor1,
  onGroupContainer10Click,
  onRectangle2Click,
}) => {
  const groupDiv3Style = useMemo(() => {
    return {
      left: propLeft,
      cursor: propCursor,
    };
  }, [propLeft, propCursor]);

  const rectangleDivStyle = useMemo(() => {
    return {
      cursor: propCursor1,
    };
  }, [propCursor1]);

  return (
    <div
      className={styles.groupWrapper}
      style={groupDiv3Style}
      onClick={onGroupContainer10Click}
    >
      <div className={styles.rectangleParent}>
        <div
          className={styles.groupChild}
          onClick={onRectangle2Click}
          style={rectangleDivStyle}
        />
        <div className={styles.clothingBrandMarketingContainer}>
          <p className={styles.clothingBrand}>Clothing Brand</p>
          <p className={styles.clothingBrand}>Marketing Strategy</p>
        </div>
        <div className={styles.div}>26/04/2023</div>
      </div>
    </div>
  );
};

export default BrandMarketingContainer1;
