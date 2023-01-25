import React, { useState } from "react";
import styles from "./CardContainer.module.css";
import { useDispatch, useSelector } from "react-redux";
import { customerActions } from "../../../../Redux/customer-slice";

const CardContainer = (props) => {
  return (
    <div className={styles.cardContainer}>
      <div
        isActive={props.activePlan === "Arcade" ? "true" : "false"}
        onClick={() => {
          props.setActivePlan("Arcade");
          props.setPrice("$9/mo");
        }}
        className={styles.card}
      >
        <img
          className={styles.cardIcon}
          alt="arcadeIcon"
          src="/assets/images/icon-arcade.svg"
        />
        <div className={styles.cardText}>
          <h3 className={styles.cardTitle}>Arcade</h3>
          <p className={styles.cardPrice}>
            {props.billing === "Yearly" ? "$90/yr" : "$9/mo"}
          </p>
          {props.billing === "Yearly" && (
            <p className={styles.cardCaption}>2 months free</p>
          )}
        </div>
      </div>
      <div
        isActive={props.activePlan === "Advanced" ? "true" : "false"}
        onClick={() => {
          props.setActivePlan("Advanced");
          props.setPrice("$12/mo");
        }}
        className={styles.card}
      >
        <img
          className={styles.cardIcon}
          alt="arcadeIcon"
          src="/assets/images/icon-advanced.svg"
        />
        <div className={styles.cardText}>
          <h3 className={styles.cardTitle}>Advanced</h3>
          <p className={styles.cardPrice}>
            {props.billing === "Yearly" ? "$120/yr" : "$12/mo"}
          </p>
          {props.billing === "Yearly" && (
            <p className={styles.cardCaption}>2 months free</p>
          )}
        </div>
      </div>
      <div
        isActive={props.activePlan === "Pro" ? "true" : "false"}
        onClick={() => {
          props.setActivePlan("Pro");
          props.setPrice("$15/mo");
        }}
        className={styles.card}
      >
        <img
          className={styles.cardIcon}
          alt="arcadeIcon"
          src="/assets/images/icon-pro.svg"
        />
        <div className={styles.cardText}>
          <h3 className={styles.cardTitle}>Pro</h3>
          <p className={styles.cardPrice}>
            {props.billing === "Yearly" ? "$150/yr" : "$15/mo"}
          </p>
          {props.billing === "Yearly" && (
            <p className={styles.cardCaption}>2 months free</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
