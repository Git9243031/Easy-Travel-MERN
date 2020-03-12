import React from "react";
import { Rate } from "antd";
import { Title } from "../Title/Title";
import { CardContainer, Price } from "./Card.styles";
import CarouselSlider from "../CarouselSlider/CarouselSlider";
import { Button } from "../Button/Button.styles";

const Card = ({ product }) => {
  const { title, images } = product;
  return (
    <CardContainer>
      <img src={images[0]} alt="" />
      <div className="p-3">
        <div className="d-flex justify-content-between">
          <Title size="18px">{title}</Title>
          <Price>$220</Price>
        </div>
        <Rate className="stars mt-2 mb-3" />
        <Button width="100%">Read</Button>
      </div>
    </CardContainer>
  );
};

export default Card;
