import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { BsArrowRightShort } from "react-icons/bs";
import { MdOutlineSpaceDashboard, MdOutlineHelpOutline } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";
import { RiSettingsLine } from "react-icons/ri";
import { FiLogOut } from "react-icons/fi";
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
          {user?.photoURL ? (
            <img src={user?.photoURL} alt="" />
          ) : (
            <img
              src="https://i.ibb.co/bRZmT6x/blank-profile-picture-973460-340.webp"
              alt=""
            />
          )}
          <div>
            <p>{user?.displayName}</p>
            <p className="text-sm">{user?.email}</p>
          </div>
        </div>
        <hr />

        <p className="sub-menu-links">
          <MdOutlineSpaceDashboard className="text-4xl mr-2"></MdOutlineSpaceDashboard>
          <h2>Dashboard</h2>
          <span>
            <BsArrowRightShort></BsArrowRightShort>
          </span>
        </p>
        <p className="sub-menu-links">
          <RxAvatar className="text-4xl mr-2"></RxAvatar>

          <h2>Edite Profile</h2>
          <span>
            <BsArrowRightShort></BsArrowRightShort>
          </span>
        </p>

        <p className="sub-menu-links">
          <RiSettingsLine className="text-4xl mr-2"></RiSettingsLine>

          <p>Settings & Privacy</p>
          <span>
            {" "}
            <BsArrowRightShort></BsArrowRightShort>
          </span>
        </p>
        <p className="sub-menu-links">
          <MdOutlineHelpOutline className="text-4xl mr-2"></MdOutlineHelpOutline>

          <p>Helps & Support</p>
          <span>
            {" "}
            <BsArrowRightShort></BsArrowRightShort>
          </span>
        </p>
        <p onClick={handleLogout} className="sub-menu-links">
          <FiLogOut className="text-4xl mr-2"></FiLogOut>
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
