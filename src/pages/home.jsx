import React from "react";
import styles from "../styles/home.module.css";
import Profile from "../components/profile";
import Card, { Card4, Card1, Card2, Card3 } from "../components/card";
import Appointment from "../components/appointment";

const home = () => {
  return (
    <div className={styles.home}>
      <Profile />
      <div className={styles.main}>
        <div className={styles.box}>
          <Card />
          <Card1 />
          <Card2 />
          <Card3 />
          <Card4 />
        </div>
        <div className={styles.box}>
          <Appointment />
        </div>
      </div>
    </div>
  );
};

export default home;
