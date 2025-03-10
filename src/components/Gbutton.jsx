import React from "react";

function GButton({ onSortByName, onSortByPriceUp, onSortByPriceDown }) {
  return (
    <div className="group-btns">
      <button className="g-btn" onClick={onSortByName}>
        Name
      </button>
      <button className="g-btn" onClick={onSortByPriceUp}>
        Up Price
      </button>
      <button className="g-btn" onClick={onSortByPriceDown}>
        Down Price
      </button>
    </div>
  );
}

export default GButton;

