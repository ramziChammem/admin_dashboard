import React from "react";
import "./WidgetSml.css";
import { Visibility } from "@material-ui/icons";
export default function WidgetSml() {
  return (
    <div className="WidgetSml">
      <span className="widgetSmlTitle">New Join Members</span>
      <ul className="widgetSmlList">
        <li className="widgetSmlListItem">
          <img
            src="https://i.ibb.co/Ycb5fMG/anis.jpg"
            alt=""
            className="widgetSmlImg"
          />
          <div className="widgetSmlUser">
            <span className="widgetSmlUsername">Anis Ghliss</span>
            <span className="widgetSmlUserJobTitle">Software Engineer</span>
          </div>
          <button className="widgetSmlBtn">
            <Visibility className="widgetSmlIcon" />
            Display
          </button>
        </li>

        <li className="widgetSmlListItem">
          <img
            src="https://i.ibb.co/ys2DvBk/aaroun.jpg"
            alt=""
            className="widgetSmlImg"
          />
          <div className="widgetSmlUser">
            <span className="widgetSmlUsername">Aaroun Haddad</span>
            <span className="widgetSmlUserJobTitle">Software Engineer</span>
          </div>
          <button className="widgetSmlBtn">
            <Visibility className="widgetSmlIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmlListItem">
          <img
            src="https://scontent.ftun9-1.fna.fbcdn.net/v/t1.6435-9/124163136_410655650094742_5948325008979590023_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=174925&_nc_ohc=63Xe_P0V3TsAX8QN-Jf&_nc_ht=scontent.ftun9-1.fna&oh=5f70fb5bdc446c898fc80facb264c900&oe=60EBFFB7"
            alt=""
            className="widgetSmlImg"
          />
          <div className="widgetSmlUser">
            <span className="widgetSmlUsername">Ramzi Chammem</span>
            <span className="widgetSmlUserJobTitle">Software Engineer</span>
          </div>
          <button className="widgetSmlBtn">
            <Visibility className="widgetSmlIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}
