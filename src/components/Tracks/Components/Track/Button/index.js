import React from "react";

const SelectButton = ({ HandleOnSelect, isSelected, uri }) => {
  return (
    <button className="Btn-Select" onClick={() => HandleOnSelect(uri)}>
      {isSelected.includes(uri) ? "Deselect" : "Select" }
    </button>
  )};

export default SelectButton;