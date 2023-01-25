import React from "react";
import Footer from "../../Footer/Footer/Footer";
import FormContentsContainer from "../../FormContents/FormContentsContainer/FormContentsContainer";
import styles from "./MainContainer.module.css";
import { useSelector } from "react-redux";

const MainContainer = (props) => {
  const activeStep = useSelector((state) => state.ui.activeStep);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.stepCircles}>
        <div
          isActive={activeStep === 1 ? "true" : "false"}
          className={styles.step}
        >
          1
        </div>
        <div
          isActive={activeStep === 2 ? "true" : "false"}
          className={styles.step}
        >
          2
        </div>
        <div
          isActive={activeStep === 3 ? "true" : "false"}
          className={styles.step}
        >
          3
        </div>
        <div
          isActive={activeStep === 4 ? "true" : "false"}
          className={styles.step}
        >
          4
        </div>
      </div>
      <FormContentsContainer />
      <Footer />
    </div>
  );
};

export default MainContainer;
