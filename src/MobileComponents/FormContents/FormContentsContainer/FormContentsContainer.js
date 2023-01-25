import React from "react";
import styles from "./FormContentsContainer.module.css";
import { useSelector } from "react-redux";
import StepOneContents from "../StepOneContents/StepOneContents";
import StepTwoContents from "../StepTwoContents/StepTwoContents";
import StepThreeContents from "../StepThreeContents/StepThreeContents";
import StepFourContents from "../StepFourContents/StepFourContents";
import StepFiveContents from "../StepFiveContents/StepFiveContents";

const FormContentsContainer = (props) => {
  const activeStep = useSelector((state) => state.ui.activeStep);
  return (
    <div className={styles.formContentContainer}>
      {activeStep === 1 && <StepOneContents />}
      {activeStep === 2 && <StepTwoContents />}
      {activeStep === 3 && <StepThreeContents />}
      {activeStep === 4 && <StepFourContents />}
      {activeStep === 5 && <StepFiveContents />}
    </div>
  );
};

export default FormContentsContainer;
