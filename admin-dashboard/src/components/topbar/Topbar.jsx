import React from "react";
import "./Topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
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
        <div className="topRight">
          <div className="topbarIconsContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconsContainer">
            <Language />
          </div>
          <div className="topbarIconsContainer">
            <Settings />
          </div>
          <img
            src="https://scontent.ftun9-1.fna.fbcdn.net/v/t1.6435-9/124163136_410655650094742_5948325008979590023_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=174925&_nc_ohc=63Xe_P0V3TsAX8QN-Jf&_nc_ht=scontent.ftun9-1.fna&oh=5f70fb5bdc446c898fc80facb264c900&oe=60EBFFB7"
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
}
