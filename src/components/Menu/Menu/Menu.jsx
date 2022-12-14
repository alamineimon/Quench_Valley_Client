import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

const Menu = () => {
  return (
    <div>
      <div
        className="hero h-[600px]"
        style={{
          backgroundImage: `url("https://i.ibb.co/kyMPg0G/alex-munsell-Yr4n8-O-3-UPc-unsplash.jpg")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className=" text-center text-neutral-content">
          <div className="">
            <h1 className="text-3xl mt-6 text-bold text-white">Our Favrites</h1>
            <p className="mt-6">Discover Our Menu</p>
            <div className=" bg-white mt-2 menu-nav h-[400px] w-full">
              <ul>
                <li><a href="/"><Link to='/'>BREACKFAST</Link></a></li>
                <li><a href="/">DINNER</a></li>
                <li><a href="/">DRINKS</a></li>
                <li><a href="/">INDIAN FOOD</a></li>
                <li><a href="/">ITALIAN FOOD</a></li>
                <li><a href="/">VEGAN FOOD</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
