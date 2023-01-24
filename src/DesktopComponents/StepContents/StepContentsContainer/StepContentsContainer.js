import React from "react";
import StepFourContent from "../StepFourContent/StepFourContent";
import StepOneContent from "../StepOneContent/StepOneContent";
import StepThreeContent from "../StepThreeContent/StepThreeContent";
import StepTwoContent from "../StepTwoContent/StepTwoContent";
import styles from "./StepContentsContainer.module.css";
import { useSelector } from "react-redux";
import StepFiveContent from "../StepFiveContent/StepFiveContent";

const StepContentsContainer = (props) => {
  const activeStep = useSelector((state) => state.ui.activeStep);

  return (
    <div className={styles.stepContentsContainer}>
      {activeStep === 1 && <StepOneContent />}
      {activeStep === 2 && <StepTwoContent />}
      {activeStep === 3 && <StepThreeContent />}
      {activeStep === 4 && <StepFourContent />}
      {activeStep === 5 && <StepFiveContent />}
    </div>
  );
};

export default StepContentsContainer;
