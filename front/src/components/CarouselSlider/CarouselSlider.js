import React from "react";
import { SlideImg } from "./CarouselSlider.styles";

const CarouselSlider = () => {
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
        <div className="carousel-item active">
          <SlideImg
            bg={
              "https://i.pinimg.com/originals/da/6a/2e/da6a2ef81dcea467c19d8a24d16ccf37.jpg"
            }
          />
        </div>
        <div className="carousel-item">
          <SlideImg
            bg={
              "https://freedesignfile.com/upload/2017/07/Summer-travel-background-with-slippers-vectors.jpg"
            }
          />
        </div>
        <div className="carousel-item">
          <SlideImg
            bg={
              "https://freedesignfile.com/upload/2014/08/Travel-summer-beach-background-set-vector-01.jpg"
            }
          />
        </div>
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
