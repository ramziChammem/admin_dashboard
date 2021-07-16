import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

import {
  HomeOutlined,
  Timeline,
  PermIdentityOutlined,
  RecentActorsOutlined,
  MailOutline,
  ForumOutlined,
  ChatBubbleOutline,
  WorkOutlineOutlined,
} from "@material-ui/icons";
var handleActive = function (e) {
  var prevElement = document.getElementsByClassName("active")[0];
  var currentElmnt = e.target;
  prevElement.classList.remove("active");
  currentElmnt.classList.add("active");
};
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link linkHome">
              <li
                className="sidebarListItem"
                onClick={(e) => {
                  handleActive(e);
                }}
              >
                <button className="listItmBtn active">
                  <HomeOutlined className="sidebarIcon" />
                  Home
                </button>
              </li>
            </Link>
            <Link to="/users" className="link linkUser">
              <li
                className="sidebarListItem"
                onClick={(e) => {
                  handleActive(e);
                }}
              >
                <button className="listItmBtn">
                  <PermIdentityOutlined className="sidebarIcon" />
                  Users
                </button>
              </li>
            </Link>
            <Link to="/Shops" className="link linkUser">
              <li
                className="sidebarListItem"
                onClick={(e) => {
                  handleActive(e);
                }}
              >
                <button className="listItmBtn">
                  <RecentActorsOutlined className="sidebarIcon" />
                  Shops
                </button>
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarmenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li
              className="sidebarListItem"
              onClick={(e) => {
                handleActive(e);
              }}
            >
              <button className="listItmBtn">
                <MailOutline className="sidebarIcon" />
                Mail
              </button>
            </li>
            <li
              className="sidebarListItem"
              onClick={(e) => {
                handleActive(e);
              }}
            >
              <button className="listItmBtn">
                <ForumOutlined className="sidebarIcon" />
                Feedback
              </button>
            </li>
            <li
              className="sidebarListItem"
              onClick={(e) => {
                handleActive(e);
              }}
            >
              <button className="listItmBtn">
                <ChatBubbleOutline className="sidebarIcon" />
                Message
              </button>
            </li>
          </ul>
        </div>
        <div className="sidebarmenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li
              className="sidebarListItem"
              onClick={(e) => {
                handleActive(e);
              }}
            >
              <button className="listItmBtn">
                <WorkOutlineOutlined className="sidebarIcon" />
                Manage
              </button>
            </li>

            <li
              className="sidebarListItem"
              onClick={(e) => {
                handleActive(e);
              }}
            >
              <button className="listItmBtn">
                <Timeline className="sidebarIcon" />
                Analytics
              </button>
            </li>
            <li
              className="sidebarListItem"
              onClick={(e) => {
                handleActive(e);
              }}
            >
              <button className="listItmBtn">
                <PermIdentityOutlined className="sidebarIcon" />
                Users
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
