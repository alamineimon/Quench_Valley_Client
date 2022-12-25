import { useQuery } from '@tanstack/react-query';
import React from 'react'
import Spinner from '../../Spinner/Spinner';

const Dinner = () => {
  const {
    data: dinner = [],
    isLoading,
  } = useQuery({
    queryKey: ["dinner"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/dinner");
      const data = res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Spinner></Spinner>;
  }
  return (
    <div id='dinner'>
      <h1>Dinner</h1>
      </div>
  )
}

export default Dinner