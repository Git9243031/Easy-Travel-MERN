import React from "react";
import { Rate, Col } from "antd";
import { Title } from "../Title/Title";
import { CardContainer, Price } from "./Card.styles";
import { ButtonLink } from "../Button/Button.styles";
import CarouselAnt from "../CarouselSlider/CarouselAnt";

const Card = ({ product }) => {
  const { _id, title, images, continent, price, stars } = product;

  return (
    <Col lg={6} md={8} sm={12} className="mb-4">
      <CardContainer>
        <CarouselAnt images={images} />
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
    </Col>
  );
};

export default Card;
