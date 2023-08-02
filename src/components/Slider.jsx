import React, { useState } from "react";
import Bg1 from "../assets/images/login-1.jpg";
import Bg2 from "../assets/images/login-2.jpg";
import Bg3 from "../assets/images/login-3.jpg";
import Bg4 from "../assets/images/login-4.jpg";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  //MANEJO DEL SLIDE
  const images = [Bg1, Bg2, Bg3, Bg4];
  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1
    );
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === images.length - 1 ? 0 : prevSlide + 1
    );
  };
  return (
    <>
      {/* Carousel */}
      <div className="slider ">
        <div className="h-screen relative overflow-hidde">
          {images.map((imageUrl, index) => (
            <div
              key={index}
              className={`${
                index === currentSlide ? "opacity-100" : "opacity-0"
              } transition-opacity duration-700 ease-in-out absolute h-full w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2`}
            >
              <img
                src={imageUrl}
                className="block w-full h-full object-cover"
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </div>
        {/* Slider controls */}
        <button type="button" className="buttonLeft" onClick={handlePrevSlide}>
          &lt;
        </button>
        <button type="button" className="buttonRight" onClick={handleNextSlide}>
          &gt;
        </button>
        {/* Slider indicators */}
        <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`w-3 h-3 rounded-full ${
                index === currentSlide ? "bg-white" : "bg-gray-500"
              }`}
              aria-current={index === currentSlide ? "true" : "false"}
              aria-label={`Slide ${index + 1}`}
              onClick={() => setCurrentSlide(index)}
            ></button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Slider;
