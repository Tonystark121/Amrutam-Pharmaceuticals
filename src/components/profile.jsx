import React from "react";
import styles from "../styles/profile.module.css";
import { FaStar } from "react-icons/fa";
import img from '../../public/assets/photo.svg'

const profile = () => {
  return (
    <div className={styles.profileBox}>
      <div className={styles.main}>
        <div className={styles.image}>
          <img src="./assets/photo.svg" alt="profile" />
        </div>
        <div className={styles.box}>
          <div className={styles.profile}>
            <div className={styles.name}>
              <p>Dr. Simran Sharma</p>
              <img src="./assets/tick.svg" alt="check" />
            </div>
            <p className={styles.specilist}>Gynecologist</p>
            <p>
              4.2{" "}
              <span>
                <FaStar className={styles.icon} />
                <FaStar className={styles.icon} />
                <FaStar className={styles.icon} />
                <FaStar className={styles.icon} />
              </span>
            </p>
          </div>
          <div className={styles.info}>
            <div>
              <p>Followers</p>
              <h4>850</h4>
            </div>
            <div>
              <p>Following</p>
              <h4>18K</h4>
            </div>
            <div>
              <p>Posts</p>
              <h4>250</h4>
            </div>
          </div>
          <button>Book a Appointment</button>
        </div>
      </div>
    </div>
  );
};

export default profile;
