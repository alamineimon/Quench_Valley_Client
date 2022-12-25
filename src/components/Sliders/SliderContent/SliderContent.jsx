import React from "react";
import Navbar from "../../../Pages/Shared/Navbar/Navbar";
// import './SliderContent.css'

function SliderContent({ activeIndex, sliderImage }) {
  return (
    <section className="sliderr">
      {/* <Navbar></Navbar> */}
      {sliderImage.map((slide, index) => (
        <div
        
        key={index}
        className={index === activeIndex ? "slides active" : "inactive"}
        >
          <img className="slide-image"
          style={{background:"linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6))"}}
          src={slide.urls} alt="" />
          <h2 id="title" className="slide-title">{slide.title}</h2>
          <h3 className="slide-text">{slide.describe}</h3>
        </div>
      ))}
    </section>
  );
}

export default SliderContent;