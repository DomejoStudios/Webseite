import React, { useState, useEffect, useRef } from 'react';
import useIntersectionObserver from './intersector.jsx';


const Slideshow = ({ slides, interval = 3000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideInterval = useRef(null);
  const [containerRef, isContainerVisible] = useIntersectionObserver({ threshold: 0.1 });

  // Function to start the slideshow
  const startSlideShow = () => {
    slideInterval.current = setInterval(() => {
      nextSlide();
    }, interval);
  };

  // Function to pause the slideshow
  const pauseSlideShow = () => {
    clearInterval(slideInterval.current);
  };

  // Automatically change slides at a set interval
  useEffect(() => {
    startSlideShow();

    // Cleanup on unmount
    return () => pauseSlideShow();
  }, [interval]); // Remove currentSlide from the dependency array

  // Move to the next slide
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  // Move to the previous slide
  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  return (
    <section className="projekte" id="IDProjekte">
      <div
        className={`slideshow-container ${isContainerVisible ? 'slideInLeft' : ''}`}
        onMouseEnter={pauseSlideShow}
        onMouseLeave={startSlideShow}
        ref={containerRef}
      >
        {slides.map((slide, index) => (
          <div
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            key={index}
          >
            {index === currentSlide && (
              <img src={slide} alt={`Slide ${index}`} className="slide-image" />
            )}
          </div>
        ))}

        <svg
          className="prev"
          onClick={prevSlide}
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
        >
          <path d="M16 8v-4l8 8-8 8v-4h-16l8-8h8z" />
        </svg>
        <svg
          className="next"
          onClick={nextSlide}
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
        >
          <path d="M16 8v-4l8 8-8 8v-4h-16l8-8h8z" />
        </svg>
      </div>
    </section>
  );
};

export default Slideshow;