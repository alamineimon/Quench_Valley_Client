import { useQuery } from '@tanstack/react-query';
import React from 'react'
import Spinner from '../../Spinner/Spinner';

const Breackfast = () => {
  const {
    data: breakfast = [],
    isLoading,
  } = useQuery({
    queryKey: ["breakfast"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/breakfast");
      const data = res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Spinner></Spinner>;
  }
  return (
    <div id='breackfast'>
      <h1>Breackfast</h1>
    </div>
  )
}

export default Breackfast