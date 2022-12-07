import React from "react";
import Navbar from "../../../Pages/Shared/Navbar/Navbar";

function SliderContent({ activeIndex, sliderImage }) {
  return (
    <section>
      {/* <Navbar></Navbar> */}
      {sliderImage.map((slide, index) => (
        <div
        key={index}
        className={index === activeIndex ? "slides active" : "inactive"}
        >
          <img className="slide-image" src={slide.urls} alt="" />
          <h2 className="slide-title">{slide.title}</h2>
          <h3 className="slide-text">{slide.describe}</h3>
        </div>
      ))}
    </section>
  );
}

export default SliderContent;