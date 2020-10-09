import React from "react";
import "./SidebarOption.css";

const SidebarOption = ({ option, Icon }) => {
  return (
    <div className="sidebarOption">
      {Icon && <Icon className="sidebarOption__icon"></Icon>}
      {Icon ? <h4>{option}</h4> : <p>{option}</p>}
      <br />
    </div>
  );
};

export default SidebarOption;
