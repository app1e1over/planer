import React from "react";
import "./style.css";

function Modal({ element, isActive, setIsActive }) {
  return isActive ? (
    <div className="backdrop" onClick={() => setIsActive(false)}>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {element}
      </div>
    </div>
  ) : (
    <></>
  );
}

export default Modal;
