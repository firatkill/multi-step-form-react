import React from "react";
import styles from "./SideStepBar.module.css";
import { useSelector } from "react-redux";

const SideStepBar = (props) => {
  const activeStep = useSelector((state) => state.ui.activeStep);

  return (
    <div className={styles.sideStepBarContainer}>
      <div className={styles.stepListItem}>
        <div
          isActive={activeStep === 1 ? "true" : "false"}
          className={styles.stepNumber}
        >
          1
        </div>
        <div className={styles.stepText}>
          <p className={styles.stepTitle}>STEP 1</p>
          <p className={styles.stepCaption}>YOUR INFO</p>
        </div>
      </div>
      <div className={styles.stepListItem}>
        <div
          isActive={activeStep === 2 ? "true" : "false"}
          className={styles.stepNumber}
        >
          2
        </div>
        <div className={styles.stepText}>
          <p className={styles.stepTitle}>STEP 2</p>
          <p className={styles.stepCaption}>SELECT PLAN</p>
        </div>
      </div>
      <div className={styles.stepListItem}>
        <div
          isActive={activeStep === 3 ? "true" : "false"}
          className={styles.stepNumber}
        >
          3
        </div>
        <div className={styles.stepText}>
          <p className={styles.stepTitle}>STEP 3</p>
          <p className={styles.stepCaption}>ADD-ONS</p>
        </div>
      </div>
      <div className={styles.stepListItem}>
        <div
          isActive={activeStep === 4 ? "true" : "false"}
          className={styles.stepNumber}
        >
          4
        </div>
        <div className={styles.stepText}>
          <p className={styles.stepTitle}>STEP 4</p>
          <p className={styles.stepCaption}>SUMMARY</p>
        </div>
      </div>
    </div>
  );
};

export default SideStepBar;
