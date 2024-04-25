import React, { useEffect, useState } from "react";
import MainCard from "../components/box";
import styles from "../styles/landing.module.css";
import Navigation from "../components/top";
import { FaAngleDown } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";

const Filter = ({ data, onAddingFilter, remove }) => {
  const [filterItems, setFilterItems] = useState([]);
  const addFilter = (value) => {
    const isPresent = filterItems.some((item) => item === value);
    console.log(isPresent);
    if (isPresent) {
      setFilterItems(filterItems.filter((item) => item !== value));
    } else {
      setFilterItems([...filterItems, value]);
    }
  };
  useEffect(() => {
    if (remove !== null) {
      setFilterItems(filterItems.filter((item) => item !== remove));
    }
  }, [remove]);
  useEffect(() => {
    onAddingFilter(filterItems);
  }, [filterItems]);
  return (
    <>
      {data.map((item, idx) => (
        <div className={styles.filter} key={idx}>
          <select
            name="experties"
            id="experties"
            onChange={(e) => addFilter(e.target.value)}
          >
            <option value={item.type}>{item.type}</option>
            {item.options.map((ele, id) => (
              <option value={ele} key={id}>
                {ele}
              </option>
            ))}
          </select>
          <FaAngleDown className={styles.icon} />
        </div>
      ))}
    </>
  );
};

const landingPage = () => {
  const [myFilter, setMyFilter] = useState([]);
  const [remove, setRemove] = useState(null);
  const filters = [
    {
      type: "Experties",
      options: [
        "Gynecologist",
        "Orthopedic",
        "NeuroLogist",
        "Cardiologists",
        "Dermatologists",
        "Pediatricians",
      ],
    },
    {
      type: "Fees",
      options: ["₹699", "₹799", "₹899", "₹699", "₹999", "₹499"],
    },
    {
      type: "Gender",
      options: ["Male", "Female", "Others"],
    },
    {
      type: "Language",
      options: ["Hindi", "English", "Telugu", "Malyalam"],
    },
    {
      type: "Gender",
      options: ["Experince", "Fees", "Gender"],
    },
  ];

  const addedFilter = (props) => {
    setMyFilter(props);
  };

  const removeFilter = (value) => {
    setRemove(value);
  };

  return (
    <div className={styles.box}>
      <Navigation />
      <div className={styles.filterBox}>
        <Filter data={filters} onAddingFilter={addedFilter} remove={remove} />
      </div>
      {myFilter.length > 1 && <div className={styles.filterItems}>
        {myFilter?.map((item, idx) => (
          <div className={styles.filterBtn} onClick={() => removeFilter(item)}>
            {item}
            <RxCross1 className={styles.icon1} />
          </div>
        ))}
      </div>}
      <div className={styles.cards}>
        <MainCard />
        <MainCard />
        <MainCard />
        <MainCard />
        <MainCard />
        <MainCard />
      </div>
    </div>
  );
};

export default landingPage;
