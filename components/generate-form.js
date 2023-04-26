import { useCallback } from "react";
import { useRouter } from "next/router";
import BrandMarketingContainer from "./brand-marketing-container";
import BrandMarketingContainer1 from "./brand-marketing-container1";
import styles from "./generate-form.module.css";
const GenerateForm = () => {
  const router = useRouter();

  const onRectangle2Click = useCallback(() => {
    router.push("/advize-question-flow");
  }, [router]);

  const onRectangle3Click = useCallback(() => {
    router.push("/advize-question-flow");
  }, [router]);

  const onGroupContainer10Click = useCallback(() => {
    router.push("/advize-question-flow");
  }, [router]);

  const onRectangle6Click = useCallback(() => {
    router.push("/advize-question-flow");
  }, [router]);

  const onRectangleClick = useCallback(() => {
    router.push("/advize-question-flow12");
  }, [router]);

  return (
    <div className={styles.groupParent}>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} onClick={onRectangleClick} />
        <div className={styles.generateNewAdvizeContainer}>
          <p className={styles.generate}>{`Generate `}</p>
          <p className={styles.generate}>New ADVIZE</p>
        </div>
        <img
          className={styles.materialSymbolsaddCircleIcon}
          alt=""
          src="/materialsymbolsaddcircle2.svg"
        />
      </div>
      <BrandMarketingContainer />
      <BrandMarketingContainer1 onRectangle2Click={onRectangle2Click} />
      <BrandMarketingContainer1
        propLeft="556px"
        propCursor="unset"
        propCursor1="pointer"
        onRectangle2Click={onRectangle3Click}
      />
      <BrandMarketingContainer propLeft="834px" />
      <BrandMarketingContainer1
        propLeft="834px"
        propCursor="pointer"
        propCursor1="unset"
        onGroupContainer10Click={onGroupContainer10Click}
      />
      <BrandMarketingContainer1
        propLeft="1112px"
        propCursor="unset"
        propCursor1="pointer"
        onRectangle2Click={onRectangle6Click}
      />
    </div>
  );
};

export default GenerateForm;
