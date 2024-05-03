/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import "./Modal.css";

export function Modal(props) {
  if (props.show) {
    return (
      <div className="modal-background">
        <div className="modal-main">
          {props.children}
          <button className="close" type="button" onClick={props.onClose}>
            &#x2715;
          </button>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
