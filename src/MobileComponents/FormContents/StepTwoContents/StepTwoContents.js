import React, { useState } from "react";
import styles from "./StepTwoContents.module.css";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../../Redux/ui-slice";
import { customerActions } from "../../../Redux/customer-slice";
import CardContainer from "./CardContainer/CardContainer";

const StepTwoContents = (props) => {
  const [isMonthly, setIsMonthly] = useState(
    useSelector((state) => state.customer.billingPlan.period) === "Monthly"
      ? true
      : false
  );
  const dispatch = useDispatch();

  const [activePlan, setActivePlan] = useState(
    useSelector((state) => state.customer.billingPlan.planName)
  );
  const [price, setPrice] = useState(
    useSelector((state) => state.customer.billingPlan.price)
  );
  dispatch(
    customerActions.assignBillingPlan({
      planName: activePlan,
      period: isMonthly ? "Monthly" : "Yearly",
      price: price,
    })
  );

  return (
    <div className={styles.stepTwoContentContainer}>
      <h1 className={styles.title}>Select your plan</h1>
      <p className={styles.caption}>
        You have the option of monthly or yearly billing.
      </p>
      <CardContainer
        activePlan={activePlan}
        setPrice={setPrice}
        setActivePlan={setActivePlan}
        billing={isMonthly ? "Monthly" : "Yearly"}
      />
      <div className={styles.toggleButton}>
        <p isActive={isMonthly && "true"}>Monthly</p>
        <div className={styles.button}>
          <label className={styles.switch}>
            <input
              onChange={() => {
                setIsMonthly(!isMonthly);
              }}
              checked={!isMonthly}
              type="checkbox"
            />
            <span className={`${styles.slider} ${styles.round}`}></span>
          </label>
        </div>
        <p isActive={!isMonthly && "true"}>Yearly</p>
      </div>
    </div>
  );
};

export default StepTwoContents;
