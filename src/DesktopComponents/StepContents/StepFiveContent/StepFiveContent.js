import React from "react";
import styles from "./StepFiveContent.module.css";

const StepFiveContent = (props) => {
  return (
    <div className={styles.stepFiveContentContainer}>
      <img alt="thanks" src="/assets/images/icon-thank-you.svg" />
      <h1>Thank You!</h1>
      <p>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
};

export default StepFiveContent;
