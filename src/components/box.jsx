import styles from "../styles/box.module.css";
import img1 from "../../public/assets/Frame.png";
import img2 from "../../public/assets/Frame(1).png";
import img3 from "../../public/assets/photo1.png";

const Card = () => {
  let item = null;
  const handleSelect = (id) => {
    if (item !== null || item === id) {
      const prevItem = document.querySelector(`#box${item}`);
      prevItem.style.color = "rgba(60, 60, 60, 1)";
      prevItem.style.border = "1px solid rgba(58, 100, 59, 0.39)";
      prevItem.style.backgroundColor = "#fff7e2";
      prevItem.querySelectorAll("*").forEach((child) => {
        child.style.color = "rgba(60, 60, 60, 1)";
      });
    }
    if (item === id) {
      item = null;
      return;
    }
    item = id;
    const newItem = document.querySelector(`#box${id}`);
    console.log(item);
    newItem.style.color = "#ffffff";
    newItem.style.border = "none";
    newItem.style.backgroundColor = "#3A643B";
    newItem.querySelectorAll("*").forEach((child) => {
      child.style.color = "#fff";
    });
  };
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <div className={styles.rating}>
          4.5 <div>&#9733;</div>
        </div>
      </div>
      <h1>Dr. Prerna Narang</h1>
      <div className={styles.main}>
        <p>
          <img src={img1} alt="" />
          Male-Female Infertility
        </p>
        <p>
          <img src={img2} alt="" />7 years of Experience
        </p>
        <p>
          <img src={img3} alt="" />
          Speaks: English, Hindi, Marathi
        </p>
      </div>
      <div className={styles.consult}>
        <div
          className={styles.consultation}
          id="box1"
          onClick={() => handleSelect(1)}
        >
          Video Consultation
          <span>&#8377;800</span>
        </div>
        <div
          className={styles.consultation}
          id="box2"
          onClick={() => handleSelect(2)}
        >
          Chat Consultation
          <span>Free</span>
        </div>
      </div>
      <button className={styles.profile}>View Profile</button>
      <button className={styles.booking}>Book Consultation</button>
    </div>
  );
};

export default Card;
