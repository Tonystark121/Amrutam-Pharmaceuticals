import { FaLocationDot } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";
import { GrFormNextLink } from "react-icons/gr";
import styles from "../styles/top.module.css";

const Search = () => {
  return (
    <div className={styles.search}>
      <div className={styles.circle1}></div>
      <div className={styles.circle2}></div>
      <div className={styles.circle3}></div>
      <div className={styles.circle4}></div>
      <div className={styles.searchItems}>
        <h1 className={styles.searchhead}>
          Find expert Doctors for an In-clinic session here
        </h1>
        <div className={styles.input}>
          <div className={styles.inputBox1}>
            <input type="text" placeholder="Select Location" />
            <FaLocationDot className={styles.icon1} />
            <FaAngleDown className={styles.icon2} />
          </div>
          <div className={styles.inputBox2}>
            <input
              type="text"
              placeholder="eg. Doctor, specialisation, clinic name"
            />
            <GrFormNextLink className={styles.icon3} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
