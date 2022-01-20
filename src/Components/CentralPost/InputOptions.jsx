import React from "react";
import "./CentralPost.css";

function InputOptions({ Icon, title, color /* type, name, onChange */ }) {
  return (
    <div className="inputOption">
      {/* <input type name onChange /> */}
      <Icon style={{ color: color }} className="mt-n2" />
      <h4>{title}</h4>
    </div>
  );
}

export default InputOptions;
