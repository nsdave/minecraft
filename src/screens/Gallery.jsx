import React from 'react'
import '../styles/Gallery.scss'

import { useState } from "react";

// const slideStyles = {
//   width: "100%",
//   height: "100%",
//   borderRadius: "10px",
//   backgroundSize: "cover",
//   backgroundPosition: "center",
// };



const Gallery = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  // const slideStylesWidthBackground = {
  //   ...slideStyles,
  //   // backgroundImage: `url(${slides[currentIndex].url})`,
  // };

  return (
    <div className='containerStyles'>
    <div className='sliderStyles'>
      <div>
        <h3>Take A look At These Images</h3>
      </div>
      <div>
        <div onClick={goToPrevious} className='leftArrowStyles'>
          ◀️
        </div>
        <div onClick={goToNext} className='rightArrowStyles'>
          ▶️
        </div>
      </div>
      <div className='{slideStylesWidthBackground}'>
        <img src={slides[currentIndex].url} alt="hello" />
      </div>
      <div className='dotsContainerStyles'>
        {slides.map((slide, slideIndex) => (
          <div
            className='dotStyle'
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            ●
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};


export default Gallery;