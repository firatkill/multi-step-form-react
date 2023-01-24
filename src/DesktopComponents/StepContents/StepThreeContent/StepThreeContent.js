import React from "react";
import styles from "./StepThreeContent.module.css";
import { uiActions } from "../../../Redux/ui-slice";
import { useDispatch, useSelector } from "react-redux";
import { customerActions } from "../../../Redux/customer-slice";
const StepThreeContent = (props) => {
  const dispatch = useDispatch();
  const isMonthly = useSelector((state) =>
    state.customer.billingPlan.period === "Monthly" ? true : false
  );
  const chosenAddOns = useSelector((state) => state.customer.addOns);
  const nextStep = () => {
    dispatch(uiActions.nextStep());
  };

  return (
    <div className={styles.stepThreeContainer}>
      <h1 className={styles.title}>Select your plan</h1>
      <p className={styles.caption}>
        You have the option of monthly or yearly billing.
      </p>
      <ul className={styles.listGroup}>
        <li
          isActive={chosenAddOns.onlineService ? "true" : "false"}
          className={styles.listItem}
        >
          <input
            checked={chosenAddOns.onlineService}
            onChange={() => {
              dispatch(
                customerActions.changeAddOns({
                  onlineService: !chosenAddOns.onlineService,
                })
              );
            }}
            type="checkbox"
          />
          <div className={styles.listItem__textGroup}>
            <h4>Online service</h4>
            <p>Access to multiplayer games</p>
          </div>
          <p className={styles.listItem__price}>+$1/mo</p>
        </li>
        <li
          isActive={chosenAddOns.largerStorage ? "true" : "false"}
          className={styles.listItem}
        >
          <input
            checked={chosenAddOns.largerStorage}
            onChange={() => {
              dispatch(
                customerActions.changeAddOns({
                  largerStorage: !chosenAddOns.largerStorage,
                })
              );
            }}
            type="checkbox"
          />
          <div className={styles.listItem__textGroup}>
            <h4>Larger storage</h4>
            <p>Extra 1TB of cloud save</p>
          </div>
          <p className={styles.listItem__price}>+$2/mo</p>
        </li>
        <li
          isActive={chosenAddOns.customizableProfile ? "true" : "false"}
          className={styles.listItem}
        >
          <input
            checked={chosenAddOns.customizableProfile}
            onChange={() => {
              dispatch(
                customerActions.changeAddOns({
                  customizableProfile: !chosenAddOns.customizableProfile,
                })
              );
            }}
            type="checkbox"
          />
          <div className={styles.listItem__textGroup}>
            <h4>Customizable profile</h4>
            <p>Custom theme on your profile</p>
          </div>
          <p className={styles.listItem__price}>+$2/mo</p>
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

export default StepThreeContent;
