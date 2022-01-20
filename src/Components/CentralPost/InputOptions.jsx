import React from "react";
import "./CentralPost.css";

function InputOptions({ Icon, title, color }) {
  return (
    <div className="inputOption">
      <Icon style={{ color: color }} className="mt-n2" />
      <h4>{title}</h4>
    </div>
  );
}

export default InputOptions;
