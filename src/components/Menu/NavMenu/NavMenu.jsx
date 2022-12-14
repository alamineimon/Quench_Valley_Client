import React from "react";
import "./NavMenu.css";


const NavMenu = () => {
  return (
    <div>
      <div className="menu-nav">
        <ul>
          <li>
            <a href="#breackfast">BREACKFAST
            </a>
          </li>
          <li>
            <a href="#dinner">DINNER</a>
          </li>
          <li>
            <a href="#drinks">DRINKS</a>
          </li>
          <li>
            <a href="#indianFood">INDIAN FOOD</a>
          </li>
          <li>
            <a href="#italianFood">ITALIAN FOOD</a>
          </li>
          <li>
            <a href="#veganFood">VEGAN FOOD</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavMenu;
