import React, { useEffect, useState } from "react";
import styles from "../styles/appointment.module.css";

const appointment = () => {
  const [startIdx, setStartIdx] = useState(0);
  const [endIdx, setEndIdx] = useState(3);
  const [sessionMode, setSessionMode] = useState(null);
  const [currId, setCurrIdx] = useState('')

  let morningSlot = null;
  let eveningSlot = null;
  let timeSlot = null;
  // let sessionMode = null;

  const time1 = ["9", "9:30", "10", "10:15", "10:45", "11"];
  const time2 = ["4", "4:15", "4:30", "4:45", "5", "5:30"];
  const slot = [
    {
      date: "Mon, 10 oct",
      slot: 10,
      color: "#818181",
    },
    {
      date: "Tuw, 11 oct",
      slot: 5,
      color: "#F1B93A",
    },
    {
      date: "wed, 12 oct",
      slot: 2,
      color: "red",
    },
    {
      date: "thurs, 13 oct",
      slot: 8,
      color: "#F1B93A",
    },
    {
      date: "fri, 14 oct",
      slot: 3,
      color: "red",
    },
    {
      date: "sat, 15 oct",
      slot: 10,
      color: "#818181",
    },
    {
      date: "sun, 16 oct",
      slot: 9,
      color: "#F1B93A",
    },
  ];

  //   Slider Functionality
  const moveLeft = () => {
    if (startIdx === 0) return;
    setStartIdx((prev) => prev - 1);
    setEndIdx((prev) => prev - 1);
  };
  const moveRight = () => {
    if (endIdx === slot.length) return;
    setEndIdx((prev) => prev + 1);
    setStartIdx((prev) => prev + 1);
  };

  // Selection Function

  const morningTime = (idx) => {
    if (morningSlot !== null || morningSlot === idx) {
      const prevtime = document.querySelector(`#btn${morningSlot}`);
      (prevtime.style.backgroundColor = "#ffffff"),
        (prevtime.style.color = "#131313");
      prevtime.style.border = "1px solid #ebebeb";
    }
    if (morningSlot === idx) {
      morningSlot = null;
      return;
    }
    morningSlot = idx;
    const time = document.querySelector(`#btn${idx}`);
    console.log(time);
    (time.style.backgroundColor = "#3A643B"), (time.style.color = "#fff");
    time.style.border = "none";
  };

  const eveningTime = (idx) => {
    if (eveningSlot !== null || eveningSlot === idx) {
      const prevtime = document.querySelector(`#btn1${eveningSlot}`);
      (prevtime.style.backgroundColor = "#ffffff"),
        (prevtime.style.color = "#131313");
      prevtime.style.border = "1px solid #ebebeb";
    }
    if (eveningSlot === idx) {
      eveningSlot = null;
      return;
    }
    eveningSlot = idx;
    const time = document.querySelector(`#btn1${idx}`);
    console.log(time);
    (time.style.backgroundColor = "#3A643B"), (time.style.color = "#fff");
    time.style.border = "none";
  };

  const sessionType = (idx) => {
    if (sessionMode !== null || sessionMode === idx) {
      const prevtime = document.querySelector(`#box${sessionMode}`);
      (prevtime.style.backgroundColor = "#ffffff"),
        (prevtime.style.color = "#131313");
      prevtime.style.border = "1px solid #ebebeb";
    }
    if (sessionMode === idx) {
      setSessionMode(null);
      return;
    }
    setSessionMode(idx);
    setCurrIdx(idx)
    const time = document.querySelector(`#box${idx}`);
    console.log(time);
    time.style.backgroundColor = "#F2FBF2";
    time.style.border = "1px solid #3A643B";
  };

  const selectSlot = (idx) => {
    if (timeSlot !== null || timeSlot === idx) {
      const prevtime = document.querySelector(`#item${timeSlot}`);
      (prevtime.style.backgroundColor = "#ffffff"),
        (prevtime.style.color = "#131313");
      prevtime.style.border = "1px solid #ebebeb";
    }
    if (timeSlot === idx) {
      timeSlot = null;
      return;
    }
    timeSlot = idx;
    const time = document.querySelector(`#item${idx}`);
    console.log(time);
    time.style.backgroundColor = "#F2FBF2";
    time.style.border = "1px solid #3A643B";
  };

  return (
    <div className={styles.main}>
      <div className={styles.heading}>
        <p className={styles.title}>Appointment</p>
        <p className={styles.price}>₹699.00</p>
      </div>
      <div className={styles.mode}>
        <p>Select your Mode of session</p>
        <div></div>
      </div>
      <div className={styles.connect}>
        <div className={styles.box} id="box1" onClick={() => sessionType(1)}>
          <div>
            <p>In-clinic {" "} {currId === 1 && <img src="./assets/tick.svg" style={{marginTop:'10px'}} width={15} height={15} />} </p>
            <p className={styles.time}>45 Mins</p>
          </div>
        </div>
        <div className={styles.box} id="box2" onClick={() => sessionType(2)}>
          <div>
            <p>Video {" "} {currId === 2 && <img src="./assets/tick.svg" style={{marginTop:'10px'}} width={15} height={15} />} </p>
            <p className={styles.time}>45 Mins</p>
          </div>
        </div>
        <div className={styles.box} id="box3" onClick={() => sessionType(3)}>
          <div>
            <p>Chat {" "} {currId === 3 && <img src="./assets/tick.svg" style={{marginTop:'10px'}} width={15} height={15} />} </p>
            <p className={styles.time}>45 Mins</p>
          </div>
        </div>
      </div>
      <div className={styles.mode}>
        <p>Pick a time slot</p>
        <div className={styles.cal}>
          <div className={styles.line}></div>
          <img src="./assets/calendar.svg" alt="" />
        </div>
      </div>
      <div className={styles.options}>
        <img
          src="./assets/left.svg"
          className={styles.left}
          alt=""
          onClick={moveLeft}
        />
        <div className={styles.slots}>
          {slot.slice(startIdx, endIdx).map((item, idx) => (
            <div
              className={styles.items}
              key={idx}
              id={`item${idx}`}
              onClick={() => selectSlot(idx)}
            >
              <div>
                <p className={styles.itemsDate}>{item.date}
                </p>
                <p
                  className={styles.itemsSlot}
                  style={{ color: `${item.color}` }}
                >
                  {item.slot} Slots
                </p>
              </div>
            </div>
          ))}
        </div>
        <img
          src="./assets/right.svg"
          className={styles.right}
          alt=""
          onClick={moveRight}
        />
      </div>
      <div className={styles.schedule}>
        <h4>Morning</h4>
        <div className={styles.items}>
          {time1.map((item, idx) => (
            <button key={idx} id={`btn${idx}`} onClick={() => morningTime(idx)}>
              {item} AM
            </button>
          ))}
        </div>
      </div>
      <div className={styles.schedule}>
        <h4>Evening</h4>
        <div className={styles.items}>
          {time2.map((item, idx) => (
            <button
              key={idx}
              id={`btn1${idx}`}
              onClick={() => eveningTime(idx)}
            >
              {item} PM
            </button>
          ))}
        </div>
      </div>
      <div className={styles.submit}>
        <button className={styles.Btn}>Make An Appointment </button>
      </div>
    </div>
  );
};

export default appointment;
