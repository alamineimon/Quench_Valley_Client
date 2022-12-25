import { useQuery } from '@tanstack/react-query';
import React from 'react'
import Spinner from '../../Spinner/Spinner';

const IndianFood = () => {
  const {
    data: indianFood = [],
    isLoading,
  } = useQuery({
    queryKey: ["indianFood"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/indianFood");
      const data = res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Spinner></Spinner>;
  }
  return (
    <div id='indianFood'>
      <h1 className='text-blue-500'>IndianFood</h1>
    </div>
  )
}

export default IndianFood