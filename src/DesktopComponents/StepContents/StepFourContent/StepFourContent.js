import React from "react";
import styles from "./StepFourContent.module.css";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../../../Redux/ui-slice";
const StepFourContent = (props) => {
  const dispatch = useDispatch();
  const billingPlan = useSelector((state) => state.customer.billingPlan);
  const addOns = useSelector((state) => state.customer.addOns);

  const calculate = () => {
    let total = 0;
    if (addOns.onlineService) {
      total += 1;
    }
    if (addOns.largerStorage) {
      total += 2;
    }
    if (addOns.customizableProfile) {
      total += 2;
    }
    if (billingPlan.planName === "Arcade") {
      total += 9;
    }
    if (billingPlan.planName === "Advanced") {
      total += 12;
    }
    if (billingPlan.planName === "Pro") {
      total += 15;
    }
    return total;
  };

  const nextStep = () => {
    dispatch(uiActions.nextStep());
  };

  return (
    <div className={styles.stepFourContainer}>
      <h1 className={styles.title}>Finishing up</h1>
      <p className={styles.caption}>
        Double-check everything looks OK before confirming.
      </p>
      <ul className={styles.checkList}>
        <div className={styles.checkList__purchases}>
          <li className={styles.listItem}>
            <p>
              {billingPlan.planName} ({billingPlan.period})
              <span
                className={styles.listItem__link}
                onClick={() => {
                  dispatch(uiActions.previousStep());
                  dispatch(uiActions.previousStep());
                }}
              >
                Change
              </span>
            </p>
            <p>{billingPlan.price}</p>
          </li>
          <hr />
          {addOns.onlineService && (
            <li className={styles.listItem}>
              <p>Online Service</p>
              <p>+$1/mo</p>
            </li>
          )}
          {addOns.largerStorage && (
            <li className={styles.listItem}>
              <p>Larger Storage</p>
              <p>+$2/mo</p>
            </li>
          )}
          {addOns.customizableProfile && (
            <li className={styles.listItem}>
              <p>Customizable Profile</p>
              <p>+$2/mo</p>
            </li>
          )}
        </div>
        <li className={`${styles.listItem} ${styles.lastListItem}`}>
          <p>Total (per month)</p>
          <p>{`+$${calculate()}/mo`}</p>
        </li>
      </ul>
      <div className={styles.buttonContainer}>
        <button
          onClick={() => {
            dispatch(uiActions.previousStep());
          }}
          className={styles.backButton}
        >
          Go Back
        </button>
        <button onClick={nextStep} className={styles.nextButton}>
          Next Step
        </button>
      </div>
    </div>
  );
};

export default StepFourContent;
