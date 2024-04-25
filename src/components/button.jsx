import React from "react";
import styles from "../styles/nav.module.css";

const button = (props) => {
  return <button type={props.type || "submit"}>{props.children}</button>;
};

export default button;
