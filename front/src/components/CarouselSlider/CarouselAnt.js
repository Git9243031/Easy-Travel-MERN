import React from "react";
import PropTypes from "prop-types";

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

CarouselAnt.propTypes = {
  images: PropTypes.array.isRequired
};

export default CarouselAnt;
