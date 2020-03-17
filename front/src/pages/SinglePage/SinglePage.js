import React, { useEffect } from "react";
import { Row, Col, Rate } from "antd";
import { SinglePageContainer } from "./SinglePage.styles";
import { Title } from "../../components/Title/Title";
import { Content } from "../../components/Content/Content.styles";
import CarouselSlider from "../../components/CarouselSlider/CarouselSlider";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../redux/modules/products";

const SinglePage = props => {
  const dispatch = useDispatch();

  const product = useSelector(state => state.products.product);
  const { title } = product;

  useEffect(() => {
    const id = props.match.params.id;
    dispatch(fetchProduct(id));
  }, []);

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
              {title}
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
