import { useQuery } from '@tanstack/react-query';
import React from 'react'
import Spinner from '../../Spinner/Spinner';

const ItalianFood = () => {
  const {
    data: italianFood = [],
    isLoading,
  } = useQuery({
    queryKey: ["italianFood"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/italianFood");
      const data = res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Spinner></Spinner>;
  }
  return (
    <div id='italianFood'>
      <h1>ItalianFood</h1>
    </div>
  )
}

export default ItalianFood