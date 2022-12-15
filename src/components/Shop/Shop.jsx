import { useQuery } from '@tanstack/react-query';
import React from 'react'
import Card from '../Card/Card'
import Spinner from '../Spinner/Spinner';

const Shop = () => {
  const {
    data: services = [],
    isLoading,
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
    <div className='grid grid-cols-3 gap-4 mt-16 px-20'>
           {services.map((service) => (
            <Card
              key={service._id}
              service={service}
            ></Card>
          ))}
    </div>
  )
}

export default Shop