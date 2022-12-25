import React from "react";

const Spinner = () => {
  return (
    <div className="m-0 p-0 bg-black text-white">
      <div className="center flex text-center justify-center items-center min-h-screen">
        <div className="ring absolute w-[200px] h-200px] rounded-[50%]"></div>
        <span>Loading...</span>
      </div>
    </div>
    // <div className='flex justify-center items-center h-full'>
    //   <p className='text-7xl font-thin'>L</p>
    //   <div className='w-10 h-10 border-8 border-dashed rounded-full animate-spin mt-5 border-green-400'></div>
    //   <p className='text-7xl font-thin'>ading....</p>
    // </div>
  );
};

export default Spinner;
