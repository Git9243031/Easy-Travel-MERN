import React from "react";
import { SlideImg } from "./CarouselSlider.styles";

const CarouselSlider = ({ slides }) => {
  const currentLocation = window.location.pathname;

  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          className="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        {slides &&
          slides.map((slide, index) => {
            return (
              <div
                key={index}
                className={`carousel-item ${index + 1 === 1 ? "active" : null}`}
              >
                <SlideImg
                  bg={
                    currentLocation === "/"
                      ? slide
                      : `${process.env.REACT_APP_API_URL}/${slide.replace(
                          "\\",
                          "/"
                        )}`
                  }
                />
              </div>
            );
          })}
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default CarouselSlider;
