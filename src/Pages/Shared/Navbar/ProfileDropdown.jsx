import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { BsArrowRightShort } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";
import "./Navbar.css";

const ProfileDropdown = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout()
      .then(() => {
        toast("Logout successfully");
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div id="sub-menu-wrap">
      <div className="sub-menu">
        <div className="user-info">
          <img
            src="https://i.ibb.co/bRZmT6x/blank-profile-picture-973460-340.webp"
            alt=""
          />
          <p>{user?.displayName}</p>
        </div>
        <hr />

        <p className="sub-menu-link">
          <img src="https://i.ibb.co/cX6Z03G/profile.png" alt="" />
          <p>Edite Profile</p>
          <span>
            {" "}
            <BsArrowRightShort></BsArrowRightShort>
          </span>
        </p>

        <p className="sub-menu-link">
          <img src="https://i.ibb.co/8B3pj1W/setting.png" alt="" />
          <p>Settings & Privacy</p>
          <span>
            {" "}
            <BsArrowRightShort></BsArrowRightShort>
          </span>
        </p>
        <p className="sub-menu-link">
          <img src="https://i.ibb.co/myzpv5S/help.png" alt="" />
          <p>Helps & Support</p>
          <span>
            {" "}
            <BsArrowRightShort></BsArrowRightShort>
          </span>
        </p>
        <p onClick={handleLogout} className="sub-menu-link">
          <img src="https://i.ibb.co/s335h1Y/logout.png" alt="" />
          <p>Logout</p>
          <span>
            {" "}
            <BsArrowRightShort></BsArrowRightShort>
          </span>
        </p>
      </div>
    </div>
  );
};

export default ProfileDropdown;
