import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Spinner from "../../Spinner/Spinner";
import Breackfast from "../Breackfast/Breackfast";
import Dinner from "../Dinner/Dinner";
import Drinks from "../Drinks/Drinks";
import NavMenu from "../NavMenu/NavMenu";
import '../NavMenu/NavMenu.css'

const Menu = () => {
  const [breack, setBreack] = useState(false);
  const [open, setOpen] = useState(false);
  const [dinner, setDinner] = useState(false);
  const [drinks, setDrinks] = useState(false);

  const {
    data: services = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/services");
      const data = res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Spinner></Spinner>;
  }
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
            {/* <NavMenu></NavMenu> */}
              <div className="bg-white -mb-2">
                <div className="menu-nav px-40">
                  <ul>
                    <Link to=''>
                    <li
                    onClick={()=> setOpen(!open)}
                    >
                      <a href="#service">All</a>
                    </li>
                    </Link>
                    <li
                    onClick={()=> setBreack(!breack)}
                    >
                      <a href="#breackfast">BREACKFAST</a>
                    </li>
                    <li
                    onClick={()=> setDinner(!dinner)}
                    >
                      <a href="#dinner">DINNER</a>
                    </li>
                    <li
                    onClick={()=> setDrinks(!drinks)}
                    >
                      <a href="#drinks">DRINKS</a>
                    </li>
                  </ul>
                </div>
              </div>
            <div className=" bg-white mt-2 flex overflow-hidden px-6 text-black h-[400px] w-[750px]">
              <NavMenu></NavMenu>
              {breack && <Breackfast></Breackfast>}
              {dinner && <Dinner></Dinner>}
              {drinks && <Drinks></Drinks>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
