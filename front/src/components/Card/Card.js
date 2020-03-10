import React from "react";
import { Rate } from "antd";
import { Title } from "../Title/Title";
import { CardContainer, Price } from "./Card.styles";
import CarouselSlider from "../CarouselSlider/CarouselSlider";
import { Button } from "../Button/Button.styles";

const Card = () => {
  return (
    <CardContainer>
      <img
        src="https://i.pinimg.com/originals/da/6a/2e/da6a2ef81dcea467c19d8a24d16ccf37.jpg"
        alt=""
      />
      <div className="p-3">
        <div className="d-flex justify-content-between">
          <Title size="18px">Plaza</Title>
          <Price>$220</Price>
        </div>
        <Rate className="stars mt-2 mb-3" />
        <Button width="100%">Read</Button>
      </div>
    </CardContainer>
  );
};

export default Card;
