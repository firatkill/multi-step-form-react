import React, { useState } from "react";
import styles from "./StepOneContents.module.css";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../../Redux/ui-slice";
import { customerActions } from "../../../Redux/customer-slice";

const StepOneContents = (props) => {
  const dispatch = useDispatch();
  const [name, setName] = useState(useSelector((state) => state.customer.name));
  const [email, setEmail] = useState(
    useSelector((state) => state.customer.email)
  );
  const [phone, setPhone] = useState(
    useSelector((state) => state.customer.phone)
  );

  return (
    <div className={styles.stepOneContainer}>
      <h1 className={styles.title}>Personal info</h1>
      <p className={styles.caption}>
        Please provide your name, email address and phone number.
      </p>
      <form className={styles.form}>
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
            dispatch(
              customerActions.assignUser({
                name: e.currentTarget.value,
                email: email,
                phone: phone,
              })
            );
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
            dispatch(
              customerActions.assignUser({
                name: name,
                email: e.currentTarget.value,
                phone: phone,
              })
            );
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
            dispatch(
              customerActions.assignUser({
                name: name,
                email: email,
                phone: e.currentTarget.value,
              })
            );
          }}
          value={phone}
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          required
          placeholder="Format: 123-456-7890"
        />
      </form>
    </div>
  );
};

export default StepOneContents;
