import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { AuthContext } from "../../../context/AuthProvider";
import ProfileDropdown from "./ProfileDropdown";

const Navbar = (props) => {
  const { user } = useContext(AuthContext);
  const [open, setOpen] = useState(false);

  const menuItems = (
    <nav>
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/shop">SHOP</Link>
        </li>
        <li>
          <Link to="/menu">MENU</Link>
        </li>
        <li>
          <Link to="/gallery">GELLARY</Link>
        </li>
        <li>
          <Link to="/blog">BLOGS</Link>
        </li>

        <li>
          <Link to="/about">ABOUT</Link>
        </li>
      </ul>
    </nav>
  );

  return (
    <div className="navbar bg-blue-400 sm:px-8  ">
      <div className="navbar-start">
        <div className="dropdown rounded-md">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a href="/">
                <Link to="/">HOME</Link>
              </a>
            </li>
            <li>
              <Link to="/menu">MENU</Link>
            </li>
            <li>
              <Link to="/gallery"> GALLERY</Link>
            </li>
            <li>
              <Link to="/shop">SHOP</Link>
            </li>
            <li>
              <Link to="/blog">BLOG</Link>
            </li>
            <li>
              <Link to="/about"> ABOUT</Link>
            </li>
          </ul>
        </div>
        <p className="lg:text-3xl sm:text-md text-bold text-white ">
          Quench_Valley
        </p>
      </div>
      <div className="navbar-center hidden lg:flex">{menuItems}</div>
      <div className="navbar-end lastNav">
        <li>
        </li>
        {user?.uid ? (
          <>
          <Link to="/bookATable">BOOK A TABLE</Link>
            <div>
              <div onClick={() => setOpen(!open)} className="user-pic">
                {user?.photoURL ? (
                  <img src={user?.photoURL} alt="" />
                ) : (
                  <img
                    src="https://i.ibb.co/bRZmT6x/blank-profile-picture-973460-340.webp"
                    alt=""
                  />
                )}
              </div>
              {open && <ProfileDropdown></ProfileDropdown>}
              {/* <div id="sub-menu-wrap">
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
                    <span> <BsArrowRightShort></BsArrowRightShort></span>
                  </p>
                  <p className="sub-menu-link">
                    <img src="https://i.ibb.co/8B3pj1W/setting.png" alt="" />
                    <p>Settings & Privacy</p>
                    <span> <BsArrowRightShort></BsArrowRightShort></span>
                  </p>
                  <p className="sub-menu-link">
                    <img src="https://i.ibb.co/myzpv5S/help.png" alt="" />
                    <p>Helps & Support</p>
                    <span> <BsArrowRightShort></BsArrowRightShort></span>
                  </p>
                  <p onClick={handleLogout} className="sub-menu-link">
                    <img src="https://i.ibb.co/s335h1Y/logout.png" alt="" />
                    <p>Logout</p>
                    <span> <BsArrowRightShort></BsArrowRightShort></span>
                  </p>
                </div>
              </div> */}
            </div>
            {/* <li>
              <button onClick={handleLogout}>LOGOUT</button>
            </li> */}
          </>
        ) : (
          <li>
            <Link to="/login">LOGIN</Link>
          </li>
        )}
      </div>
    </div>
  );
};

export default Navbar;
