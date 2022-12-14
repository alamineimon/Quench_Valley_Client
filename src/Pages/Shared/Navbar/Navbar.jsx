import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = (props) => {
  // const menuItems = (
  //   <React.Fragment>
  //     <li className="hover:border-b-4 hover:ease-in-out hover:duration-300 hover:border-green-500 hover:border-solid">
  //       <Link to="/">HOME</Link>
  //     </li>
  //     <li className="hover:border-b-4 hover:ease-in-out hover:duration-300 hover:border-green-500 hover:border-solid">
  //       <Link to="/blogs">ABOUT</Link>
  //     </li>
  //     <li className="hover:border-b-4 hover:ease-in-out hover:duration-300 hover:border-green-500 hover:border-solid">
  //       <Link to="/menu">MENU</Link>
  //     </li>
  //     <li className="hover:border-b-4 hover:ease-in-out hover:duration-300 hover:border-green-500 hover:border-solid">
  //       <Link to="/services">GELLARY</Link>
  //     </li>
  //     <li className="hover:border-b-4 hover:ease-in-out hover:duration-300 hover:border-green-500 hover:border-solid">
  //       <Link to="/services">BLOGS</Link>
  //     </li>
  //     <li className="hover:border-b-4 hover:ease-in-out hover:duration-300 hover:border-green-500 hover:border-solid">
  //       <Link to="/services">SHOP</Link>
  //     </li>
  //   </React.Fragment>
  // );

  return (
    <div className="navbar bg-blue-400 px-12  fixed top-0  z-[999]">
      <div className="navbar-start">
        <div className="dropdown">
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
                <Link to='/'>HOME</Link>
              </a>
            </li>
            <li>
                <Link to='/menu'>MENU</Link>

            </li>
            <li>
              <Link to='/gallery'> GALLERY</Link>
            </li>
            <li>
              <Link to='/shop'>SHOP</Link>
            </li>
            <li>
              <Link to='/blog'>BLOG</Link>
            </li>
            <li>
               <Link to='/about'> ABOUT</Link>

            </li>
          </ul>
        </div>
        <p className="text-3xl text-bold text-white ">Quench_Valley</p>
      </div>
      <div className="navbar-center hidden lg:flex">
        <nav>
          <ul>
          <li>
              <a href="/">
                <Link to='/'>HOME</Link>
              </a>
            </li>
            <li>
                <Link to='/menu'>MENU</Link>

            </li>
            <li>
              <Link to='/gallery'> GALLERY</Link>
            </li>
            <li>
              <Link to='/shop'>SHOP</Link>
            </li>
            <li>
              <Link to='/blog'>BLOG</Link>
            </li>
            <li>
               <Link to='/about'> ABOUT</Link>

            </li>
          </ul>
        </nav>
      </div>
      <div className="navbar-end lastNav">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/eimonalamin/"
          className=""
        >
          LOGIN
        </a>
      </div>
    </div>
  );
};

export default Navbar;
