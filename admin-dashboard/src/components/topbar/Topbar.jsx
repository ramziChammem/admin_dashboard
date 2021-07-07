import React from "react";
import "./Topbar.css";
export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <img
            className="logo"
            src="https://i.ibb.co/172GxmR/logo-1.png"
            alt="Logo"
          />
        </div>
        <div className="topRight">Right</div>
      </div>
    </div>
  );
}
