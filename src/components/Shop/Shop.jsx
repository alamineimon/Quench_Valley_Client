import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import Card from "./Card/Card";
import Spinner from "../Spinner/Spinner";

const Shop = () => {
  const { data: services = [], isLoading } = useQuery({
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
      <p className="text-center text-4xl uppercase">All Your Food Here</p>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mt-6 px-10">
        {services.map((service) => (
          <Card key={service._id} service={service}></Card>
        ))}
      </div>
    </div>
  );
};

export default Shop;
