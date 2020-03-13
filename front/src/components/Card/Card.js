import React from "react";
import { Rate } from "antd";
import { Title } from "../Title/Title";
import { CardContainer, Price } from "./Card.styles";
import CarouselSlider from "../CarouselSlider/CarouselSlider";
import { Button, ButtonLink } from "../Button/Button.styles";

const Card = ({ product }) => {
  const { _id, title, images, continent, price, stars } = product;
  return (
    <CardContainer>
      <img src={`${process.env.REACT_APP_API_URL}\\${images[0]}`} alt="" />
      <div className="p-3">
        <div className="d-flex justify-content-between">
          <Title size="18px">{title}</Title>
          <Price>${price}</Price>
        </div>
        <Title size="12px">{continent}</Title>
        <Rate
          className="stars mt-2 mb-3"
          defaultValue={stars}
          disabled={true}
        />
        <ButtonLink width="100%" to={`/products/${_id}`}>
          Read
        </ButtonLink>
      </div>
    </CardContainer>
  );
};

export default Card;
