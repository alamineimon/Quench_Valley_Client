import { useQuery } from '@tanstack/react-query';
import React from 'react'
import Spinner from '../../Spinner/Spinner';

const VeganFood = () => {
  const {
    data: veganFood = [],
    isLoading,
  } = useQuery({
    queryKey: ["veganFood"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/veganFood");
      const data = res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Spinner></Spinner>;
  }
  return (
    <div id='veganFood'>
      <h1>VeganFood</h1>
    </div>
  )
}

export default VeganFood