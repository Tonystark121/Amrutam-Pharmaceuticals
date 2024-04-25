import React from "react";
import styles from "../styles/nav.module.css";
import Button from "./button";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

const nav = () => {
  const { pathname } = useLocation();
  return (
    <div className={styles.nav}>
      <div className={styles.tabs}>
        <img src="./assets/logo.svg" alt="Logo" />
        <ul>
          <li>
            <NavLink
              to="/"
              className={styles.navlink}
              style={pathname === "/" ? { color: "green" } : {}}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/doctors"
              className={styles.navlink}
              activeClassName={styles.active}
              style={pathname === "/doctors" ? { color: "green" } : {}}
            >
              Find Doctors
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className={styles.navlink}
              activeClassName={styles.active}
              style={pathname === "/about" ? { color: "green" } : {}}
            >
              About Us
            </NavLink>
          </li>
        </ul>
      </div>
      <div className={styles.btns}>
        <button className={`${styles.btn} ${styles.btn1}`}>Login</button>
        <button className={`${styles.btn} ${styles.btn2}`}>Sign Up</button>
      </div>
    </div>
  );
};

export default nav;
