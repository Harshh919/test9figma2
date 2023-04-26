import { useCallback } from "react";
import { useRouter } from "next/router";
import GenerateForm from "../components/generate-form";
import styles from "./dashboard.module.css";
const Dashboard = () => {
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

  return (
    <div className={styles.dashboard}>
      <img className={styles.dashboardChild} alt="" src="/group-21.svg" />
      <div className={styles.nav}>
        <div className={styles.navBg} />
        <div className={styles.advizerAi}>ADVIZER AI</div>
      </div>
      <div className={styles.advizeDashboard}>ADVIZE DASHBOARD</div>
      <GenerateForm />
    </div>
  );
};

export default Dashboard;
