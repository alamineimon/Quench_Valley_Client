import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";
import "./Navbar.css";
import { BsArrowBarRight, BsArrowRightShort } from "react-icons/bs";

const Navbar = (props) => {
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

  const toggleMenu = () =>{
    console.log("clicked")
    // subMenu.classlist.toggle("open-menu")
  }

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
    <div className="navbar bg-blue-400 sm:px-8 fixed top-0  ">
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
        <p className="lg:text-3xl sm:text-md text-bold text-white ">Quench_Valley</p>
      </div>
      <div className="navbar-center hidden lg:flex">
        {/* <nav>
          <ul>
            <li>
              <a href="/">
                <Link to="/">HOME</Link>
              </a>
            </li>
            <li>
              <Link to="/shop">SHOP</Link>
            </li>
            <li>
              <Link to="/gallery"> GALLERY</Link>
            </li>
            <li>
              <Link to="/menu">MENU</Link>
            </li>
            <li>
              <Link to="/blog">BLOG</Link>
            </li>
            <li>
              <Link to="/about"> ABOUT</Link>
            </li>
          </ul>
        </nav> */}
        {menuItems}
      </div>
      <div className="navbar-end lastNav">
        {user?.uid ? (
          <>
            <div>
              <div className="user-pic">
                <img
                  onClick={toggleMenu}
                  src="https://i.ibb.co/bRZmT6x/blank-profile-picture-973460-340.webp"
                  alt=""
                />
              </div>
              <div className="sub-menu-wrap" id="subMenu">
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
              </div>
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
