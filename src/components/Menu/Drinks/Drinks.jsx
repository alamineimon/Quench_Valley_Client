import { useQuery } from '@tanstack/react-query';
import React from 'react'
import Spinner from '../../Spinner/Spinner';

const Drinks = () => {
  const {
    data: drinks = [],
    isLoading,
  } = useQuery({
    queryKey: ["drinks"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/drinks");
      const data = res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Spinner></Spinner>;
  }
  return (
    <div id='drinks'>
      <h1>Drinks</h1>
    </div>
  )
}

export default Drinks