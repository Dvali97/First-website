import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import './Slideshow.css';

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex -1;
    setCurrentIndex(newIndex);
  }

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length -1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  const goToSlide = (slideIndex => {
    setCurrentIndex(slideIndex);
  })

  return (
    <div>
      <div className="sliderStyles">
        <div className="leftArrowStyles" onClick={goToPrevious}><span>&#60;</span></div>
        <div className="rightArrowStyles" onClick={goToNext}>{`>`}</div>
        <div className="slideStyles"
        style={{backgroundImage: `url(${slides[currentIndex].url})`}}>
        </div>
        <div className="dotsContainerStyles">
          {slides.map((slide, slideIndex) => (
            <div className="dotStyles" key={slideIndex} onClick={() => goToSlide(slideIndex)}></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
