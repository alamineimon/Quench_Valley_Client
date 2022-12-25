import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";
import "./Navbar.css";
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
    <div className="navbar bg-blue-400 px-12  fixed top-0  ">
      <div className="navbar-start">
        {/* <div className="dropdown">
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
        </div> */}
        <p className="text-3xl text-bold text-white ">Quench_Valley</p>
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
            <div
              onClick={handleLogout}
              title="LOGOUT"
              className="flex avatarSection profile h-[50px] w-[200px] border-1 border-white"
            >
              <div className="avatar w-1/2">
                <div className="w-[50px] rounded-full">
                  <img
                    src="https://i.ibb.co/ZmRvQLn/logo.png"
                    alt="ProfileImage"
                  />
                </div>
              </div>
              <p className="-ml-11 mt-3 w-[150px] text-white text-bold">
                {user?.displayName}
              </p>
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
