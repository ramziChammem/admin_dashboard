import React from "react";
import "./User.css";
import {
  PersonOutlineOutlined,
  PhoneAndroidOutlined,
  EmailOutlined,
  LocationOnOutlined,
} from "@material-ui/icons";
export default function User() {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">User Details</h1>
      </div>
      <div className="userContainer">
        <div className="userPersonalInformation">
          <div className="personalInfoTitle">
            <span className="userSpanPersonal">Personal Information</span>
          </div>

          <div className="userPeronalTop">
            <img
              src="https://scontent.ftun9-1.fna.fbcdn.net/v/t1.6435-9/124163136_410655650094742_5948325008979590023_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=174925&_nc_ohc=63Xe_P0V3TsAX8QN-Jf&_nc_ht=scontent.ftun9-1.fna&oh=5f70fb5bdc446c898fc80facb264c900&oe=60EBFFB7"
              alt=""
              className="userPersonalTopImg"
            />
            <div className="userPersonalTopTitle">
              <span className="userPersonalTopUsername">Ramzi Chammem</span>
              <span className="userPersonalJobTitle">Software Engineer</span>
            </div>
          </div>
          <div className="userPeronalBottom">
            <div className="userPersonalInfo">
              <PersonOutlineOutlined className="userPersonalIcon" />
              <div className="userShowInfoTitle">RamziChammem69</div>
            </div>
            <div className="userPersonalInfo">
              <PhoneAndroidOutlined className="userPersonalIcon" />
              <div className="userShowInfoTitle">+216 58 255 774</div>
            </div>
            <div className="userPersonalInfo">
              <EmailOutlined className="userPersonalIcon" />
              <div className="userShowInfoTitle">RamziChammem69@gmail.com</div>
            </div>
            <div className="userPersonalInfo">
              <LocationOnOutlined className="userPersonalIcon" />
              <div className="userShowInfoTitle">Nabeul | Tunisia</div>
            </div>
            <hr className="breakLine"></hr>
          </div>
        </div>
        <div className="userFinancialInformation">
          <span className="userSpanFinancial">Financial Information</span>
        </div>
      </div>
    </div>
  );
}
