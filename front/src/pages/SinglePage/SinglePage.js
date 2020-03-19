import React, { useEffect } from "react";
import { Row, Col, Rate } from "antd";
import { FormattedMessage } from "react-intl";

import { SinglePageContainer } from "./SinglePage.styles";
import { Title } from "../../components/Title/Title";
import { Content } from "../../components/Content/Content.styles";
import CarouselSlider from "../../components/CarouselSlider/CarouselSlider";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../redux/modules/products";

const SinglePage = props => {
  const dispatch = useDispatch();

  const product = useSelector(state => state.products.product);
  const {
    title,
    price,
    stars,
    features,
    continent,
    description,
    images
  } = product;

  useEffect(() => {
    const id = props.match.params.id;
    dispatch(fetchProduct(id));
  }, []);
  return (
    <SinglePageContainer>
      <CarouselSlider
        // slides={[
        //   "http://localhost:5000/uploads/1584361381488_paris-view-over-paris-i21042.jpg",
        //   "https://freedesignfile.com/upload/2017/07/Summer-travel-background-with-slippers-vectors.jpg",
        //   "https://www.freegreatpicture.com/files/166/14533-synthesis-of-the-desktop.jpg"
        // ]}
        slides={images}
      />
      <Content>
        <Row>
          <Col span={24}></Col>
        </Row>
        <Row gutter={16}>
          <Col span={10} offset={2}>
            <Title bold size="28px">
              {title}
            </Title>
            <Title size="14px" lineHeight="32px">
              <span className="font-weight-bold title">
                <FormattedMessage
                  id="single-page.price"
                  defaultMessage="single-page.price"
                />
                :
              </span>
              ${price}
            </Title>
            <Title size="14px" lineHeight="32px">
              <span className="font-weight-bold title">
                <FormattedMessage
                  id="single-page.continent"
                  defaultMessage="single-page.continent"
                />
                :
              </span>
              {continent}
            </Title>
            <Rate value={stars} disabled={true} />
            <hr />
            <p>{description}</p>
            <hr />
          </Col>
          <Col span={8} offset={4}>
            <Title bold size="28px">
              <FormattedMessage
                id="single-page.features"
                defaultMessage="single-page.features"
              />
            </Title>
            <ul className="features-list">
              {features &&
                features
                  .split(",")
                  .map(feature => (
                    <li className="text-capitalize font-weight-bold">
                      {feature}
                    </li>
                  ))}
            </ul>
          </Col>
        </Row>
      </Content>
    </SinglePageContainer>
  );
};

export default SinglePage;
