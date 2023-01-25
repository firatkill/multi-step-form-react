import React from "react";
import styles from "./Footer.module.css";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../../../Redux/ui-slice";

const Footer = (props) => {
  const dispatch = useDispatch();
  const activeStep = useSelector((state) => state.ui.activeStep);

  return (
    <div className={styles.footerContainer}>
      <div className={styles.buttonContainer}>
        {activeStep !== 1 && (
          <button
            onClick={() => {
              dispatch(uiActions.previousStep());
            }}
            className={styles.backButton}
          >
            Go Back
          </button>
        )}
        <button
          onClick={() => {
            dispatch(uiActions.nextStep());
          }}
          className={styles.nextButton}
        >
          Next Step
        </button>
      </div>
    </div>
  );
};

export default Footer;
