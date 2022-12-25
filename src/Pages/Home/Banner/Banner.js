import React from "react";
import "../../Shared/Navbar/Navbar.css";

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
            <h1 className="mb-5 text-5xl font-bold">
              Wellcome to Quench_Valley
            </h1>
            <p className="mb-5 text-xl">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora reiciendis <br /> pariatur odio exercitationem ea temporibus.
            </p>
            <div className="lastNav">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/eimonalamin/"
                className=""
              >
                EXPLORE
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
