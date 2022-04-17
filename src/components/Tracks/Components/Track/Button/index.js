import React from "react";
import styles from "../Track.module.css";

const SelectButton = ({ HandleOnSelect, isSelected, uri }) => {
  return (
    <button className={styles.Btn} onClick={() => HandleOnSelect(uri)}>
      {isSelected.includes(uri) ? "DESELECT" : "SELECT" }
    </button>
  )};

export default SelectButton;