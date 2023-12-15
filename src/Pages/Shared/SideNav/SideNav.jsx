import { Link, NavLink } from "react-router-dom";
import "../../../Styles/Pages/Sidenav/SideNav.scss";
import {
  FaHome,
  FaUserAlt,
  FaCalendarCheck,
  FaRunning,
  FaSlidersH,
} from "react-icons/fa";

const SideNav = () => {
  return (
    <div className="sidenav">
      {/* Sidenav Logo */}
      <div className="sidenav-logo">
        <Link to="">
          <img src="https://i.ibb.co/w7V8Gdh/hjytr.png" alt="" />
        </Link>
      </div>
      {/* Sidenav Menu */}
      <div className="sidenav-menu">
        <NavLink to="" className="menu-item" activeclassname="active">
          <FaHome className="item-icon" />
          <span className="item-text"> Home</span>
        </NavLink>

        <NavLink to="profile" className="menu-item" activeclassname="active">
          <FaUserAlt className="item-icon" />
          <span className="item-text"> Profile</span>
        </NavLink>

        <NavLink to="schedule" className="menu-item" activeclassname="active">
          <FaCalendarCheck className="item-icon" />
          <span className="item-text"> Schedule</span>
        </NavLink>

        <NavLink to="activities" className="menu-item" activeclassname="active">
          <FaRunning className="item-icon" />
          <span className="item-text"> Activities</span>
        </NavLink>

        <NavLink to="settings" className="menu-item" activeclassname="active">
          <FaSlidersH className="item-icon" />
          <span className="item-text"> Settings</span>
        </NavLink>
      </div>
    </div>
  );
};

export default SideNav;
