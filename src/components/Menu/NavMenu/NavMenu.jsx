import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import Spinner from "../../Spinner/Spinner";
import "./NavMenu.css";


const NavMenu = () => {
  const[menu , setMenu] = useState(null)

  const {
    data: services = [],
    isLoading, refetch
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
    <div id="service"  className="grid grid-cols-1 gap-3">
    {services.map((service) => (
      <div className="h-20 flex bg-blue-300 shadow-xl">
        <div className="w-3/4 text-left overflow-hidden">
          <h2 className="text-2xl text-500 mb-1 ">
            Product Name:{" "}
            <span className="text-orange-500">
              {" "}
              {service.productName}
            </span>
          </h2>
          <p className="text-sm">{service.describe}</p>
        </div>
        <div className="w-1/4 lastNav">
          <p className="text-bold text-orange-500">
            Price: ${service.price}
          </p>
          <button >Buy</button>
        </div>
      </div>
    ))}
  </div> 
  );
};

export default NavMenu;
