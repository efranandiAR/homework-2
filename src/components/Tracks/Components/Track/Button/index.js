import React from "react";

const SelectButton = ({ HandleOnSelect, isSelected }) => {
  return (
    <button className="Btn-Select" onClick={HandleOnSelect}>
      {isSelected ? "Select" : "Deselect" }
    </button>
  )};

export default SelectButton;