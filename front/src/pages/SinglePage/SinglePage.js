import React from "react";
import { Row, Col, Rate } from "antd";
import { SinglePageContainer } from "./SinglePage.styles";
import { Title } from "../../components/Title/Title";
import { Content } from "../../components/Content/Content.styles";
import CarouselSlider from "../../components/CarouselSlider/CarouselSlider";

const SinglePage = () => {
  return (
      <SinglePageContainer>
      <CarouselSlider />
      <Content>
        <Row>
          <Col span={24}></Col>
        </Row>
        <Row gutter={16}>
          <Col span={10} offset={2}>
            <Title bold size="28px">
              Plaza
            </Title>
            <span>$110</span>
            <Title size="14px">Continent: Africa</Title>
            <Rate />
            <hr />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the standard dummy text. Lorem
              Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <hr />
          </Col>
          <Col span={8} offset={4}>
            <Title bold size="28px">
              Features
            </Title>
            <ul className="features-list">
              <li>Delivery to hotel</li>
              <li>Breackfast</li>
              <li>Private beach</li>
              <li>Wi-fi</li>
            </ul>
          </Col>
        </Row>
      </Content>
    </SinglePageContainer>
  );
};

export default SinglePage;
