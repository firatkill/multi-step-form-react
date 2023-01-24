import React, { useRef, useState } from "react";
import styles from "./StepOneContent.module.css";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../../Redux/ui-slice";
import { customerActions } from "../../../Redux/customer-slice";
const StepOneContent = (props) => {
  const dispatch = useDispatch();
  const [name, setName] = useState(useSelector((state) => state.customer.name));
  const [email, setEmail] = useState(
    useSelector((state) => state.customer.email)
  );
  const [phone, setPhone] = useState(
    useSelector((state) => state.customer.phone)
  );

  const submitHandler = () => {
    dispatch(
      customerActions.assignUser({
        name: name,
        email: email,
        phone: phone,
      })
    );
    dispatch(uiActions.nextStep());
  };

  return (
    <div className={styles.stepOneContentContainer}>
      <h1 className={styles.title}>Personal info</h1>
      <p className={styles.caption}>
        Please provide your name, email address and phone number.
      </p>
      <form onSubmit={submitHandler} className={styles.form}>
        <label className={styles.label} for="name">
          Name
        </label>
        <input
          className={styles.input}
          name="name"
          value={name}
          type="text"
          onChange={(e) => {
            setName(e.currentTarget.value);
          }}
          minLength={5}
          required
          placeholder="e.g. Stephen King"
        />
        <label className={styles.label} for="email">
          Email Address
        </label>
        <input
          className={styles.input}
          name="email"
          required
          onChange={(e) => {
            setEmail(e.currentTarget.value);
          }}
          value={email}
          type="email"
          placeholder="e.g. stephenking@lorem.com"
        />
        <label className={styles.label} for="phone">
          Phone Number
        </label>
        <input
          className={styles.input}
          type="tel"
          onChange={(e) => {
            setPhone(e.currentTarget.value);
          }}
          value={phone}
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          required
          placeholder="Format: 123-456-7890"
        />
        <button className={styles.submitButton} type="submit">
          Next Step
        </button>
      </form>
    </div>
  );
};

export default StepOneContent;
