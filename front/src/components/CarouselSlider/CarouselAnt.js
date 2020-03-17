import React from "react";
import { CarouselAntStyled } from "./CarouselSlider.styles";

const CarouselAnt = ({ images }) => {
  return (
    <CarouselAntStyled autoplay>
      {images.map((image, index) => (
        <div key={image + index}>
          <img
            src={`${process.env.REACT_APP_API_URL}\\${image}`}
            alt="productImage"
          />
        </div>
      ))}
    </CarouselAntStyled>
  );
};

export default CarouselAnt;
