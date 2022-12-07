import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';



const Banner = () => {
    return (
      <div>
        <div
        className="hero h-[500px]"
        style={{
          backgroundImage: `url("https://i.ibb.co/bJtF8hf/aditya-joshi-y-KC0gjd0f-UQ-unsplash.jpg")`,
        }}
        >
        <div className="hero-overlay bg-opacity-60">

        </div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-5xl font-bold">Wellcome to TireX</h1>
            <p className="mb-5 text-xl">
              This is asecond-hand bikecycle selling platform for those, who are <br />
              litirary poor and have a big dream to but a BikeCycle
            </p>
            <button className="hover:text-gray-100 px-10 rounded py-4 text-bold hover:bg-green-600 bg-blue-800 text-white">
              Get Started
            </button>
          </div>
        </div>
      </div>
      </div>
    );
};

export default Banner;