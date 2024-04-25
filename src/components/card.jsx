import React, { useState } from "react";
import styles from "../styles/card.module.css";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

export const Card4 = () => {
  return (
    <div className={styles.main1}>
      <div className={styles.nav}>
        <h3>Feature Reviews (102)</h3>
      </div>
      <div className={styles.mainDetails}>
        <div className={styles.review}>
          <div className={styles.reviewProfile}>
            <div className={styles.tobe}>
              <div className={styles.reviewImg}>
                <img src="./assets/photo.svg" alt="Home" />
              </div>
              <div className={styles.text}>
                <h4>Suman Sharma</h4>
                <p>Consult for Skin Care</p>
              </div>
            </div>
            <p className={styles.date}>
              2016-<span>Present</span>
            </p>
          </div>
          <div className={styles.star}>
            <FaStar className={styles.icon} />
            <FaStar className={styles.icon} />
            <FaStar className={styles.icon} />
            <FaStar className={styles.icon} />
            <FaStar className={styles.icon} />
          </div>
          <p>
            Might be bit early to confirm but yes I can see noticeable
            difference in my hairfall. will write again after using it for
            longer periods
          </p>
        </div>
        <div className={styles.review}>
          <div className={styles.reviewProfile}>
            <div className={styles.tobe}>
              <div className={styles.reviewImg}>
                <img src="./assets/photo.svg" alt="Home" />
              </div>
              <div className={styles.text}>
                <h4>Suman Sharma</h4>
                <p>Consult for Skin Care</p>
              </div>
            </div>
            <p className={styles.date}>
              2016-<span>Present</span>
            </p>
          </div>
          <div className={styles.star}>
            <FaStar className={styles.icon} />
            <FaStar className={styles.icon} />
            <FaStar className={styles.icon} />
            <FaStar className={styles.icon} />
            <FaStar className={styles.icon} />
          </div>
          <p>
            Might be bit early to confirm but yes I can see noticeable
            difference in my hairfall. will write again after using it for
            longer periods
          </p>
        </div>
      </div>
    </div>
  );
};

export const Card3 = () => {
  return (
    <div className={styles.main}>
      <div className={styles.nav}>
        <h3>My Work Experinces</h3>
      </div>
      <div className={styles.experince}>
        <p>I have been in practice for : 7+ Years</p>
        <div className={styles.line}></div>
        <div className={styles.info}>
          <div className={styles.infoBox}>
            <div>
              <div className={styles.info_img}>
                <img src="./assets/home.svg" alt="Home" />
              </div>
              <div className={styles.text}>
                <h4>Midtown medical clinic</h4>
                <p>Senior Doctor</p>
              </div>
            </div>
            <p className={styles.date}>
              2016-<span>Present</span>
            </p>
          </div>
          <div className={styles.infoBox}>
            <div>
              <div className={styles.info_img}>
                <img src="./assets/home.svg" alt="Home" />
              </div>
              <div className={styles.text}>
                <h4>Midtown medical clinic</h4>
                <p>Senior Doctor</p>
              </div>
            </div>
            <p className={styles.date}>2010-2015</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Card2 = () => {
  const data = [
    "Skin Treatment",
    "Pregnancy",
    "Period Doubts",
    "Pelvic pain",
    "Endometriosis",
    "Ovarian Cyst",
    "Disease 1",
    "Disease 2",
    "Disease 3",
    "Disease 4",
    "Disease 5",
  ];
  const [showAll, setShowAll] = useState(false);
  const handleAll = () => {
    setShowAll((prev) => !prev);
  };
  return (
    <div className={styles.container2}>
      <div className={styles.nav}>
        <h3>The Concers I Treat</h3>
      </div>
      <div className={styles.tab}>
        {!showAll &&
          data
            .slice(0, 5)
            .map((item, idx) => <button key={idx}>{item}</button>)}
        {showAll && data.map((item, idx) => <button key={idx}>{item}</button>)}
        <button className={styles.btn} onClick={handleAll}>
          {showAll && (
            <>
              <FaMinus /> Hide All
            </>
          )}
          {!showAll && (
            <>
              <FaPlus /> 5 More
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export const Card1 = () => {
  return (
    <div className={styles.container1}>
      <div className={styles.nav}>
        <h3>I Specialize in</h3>
      </div>
      <div className={styles.detail}>
        <div className={styles.box}>
          <div className={styles.imgBox}>
            <img src="./assets/men.svg" alt="women" />
          </div>
          <p>Women's Health</p>
        </div>
        <div className={styles.box}>
          <div className={styles.imgBox}>
            <img src="./assets/men.svg" alt="skin" />
          </div>
          <p>Skin care</p>
        </div>
        <div className={styles.box}>
          <div className={styles.imgBox}>
            <img src="./assets/men.svg" alt="" />
          </div>
          <p>Immunity</p>
        </div>
        <div className={styles.box}>
          <div className={styles.imgBox}>
            <img src="./assets/men.svg" alt="" />
          </div>
          <p>Hair Care</p>
        </div>
      </div>
    </div>
  );
};

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <h3>A Little about me</h3>
        <button>
          Follow <FaPlus className={styles.icon} />{" "}
        </button>
      </div>
      <div className={styles.details}>
        <div className={styles.text}>
          Hello I am Dr. Bruce Willis a Gynaecologist in Sanjivni Hospital
          Surat. love to work with all my hospital staff and seniour doctors.
          Completed my graduation in Gynaecologist Medicine from the IIT BHU
        </div>
        <div className={styles.border}>
          <div></div>
          <a href="">Read More</a>
        </div>
        <div className={styles.tabs}>
          <p>Language Spoken</p>
          <button>English</button>
          <button>Hindi</button>
          <button>Telugu</button>
        </div>
        <div className={styles.socials}>
          <img src="./assets/fb.png" alt="facebook" />
          <img src="./assets/insta.png" alt="facebook" />
          <img src="./assets/yt.png" alt="facebook" />
          <img src="./assets/twi.png" alt="facebook" />
        </div>
      </div>
    </div>
  );
};

export default Card;
