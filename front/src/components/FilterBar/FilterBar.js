import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Rate } from "antd";

import SelectFilter from "../SelectFilter/SelectFilter";
import { FilterBarStyled } from "./FilterBar.styles";
import { SliderStyled } from "../SliderRange/SliderRange.styles";
import { Button } from "../Button/Button.styles";

const FilterBar = ({ items }) => {
  // const dispatch = useDispatch();

  const { products } = useSelector(state => state.products);

  const [maxPrice, setMaxPrice] = useState(200);

  const [filter, setFilter] = useState({
    priceRange: [0, 100]
  });

  useEffect(() => {
    // const maxRange = Math.max(...products.map(product => product.price));
    // console.log(maxRange)
    setMaxPrice(Math.max(...products.map(product => product.price)));
    // const test = Math.max(...[1, 8, 5, 6]);
    // console.log("maxPrice2: ", priceArr);
    // console.log("maxPrice: ", maxPrice);

    // setFilter({
    //   ...filter,
    //   priceRange: Math.max(...products.map(product => product.price))
    // });
    console.log("filter: ", maxPrice);
  }, [products]);

  useEffect(() => {}, [filter]);

  const onSliderHandler = e => {
    console.log(filter);
    setFilter({
      ...filter,
      priceRange: e
    });
  };

  return (
    <FilterBarStyled className="bg-dark">
      <Row gutter={[16, 16]} className="py-4 px-4 m-0">
        <Col className="w-100 d-md-flex justify-content-between">
          <SelectFilter items={["Asia", "Europe", "Africa"]} />
          <SliderStyled
            width="100%"
            className="d-block mx-auto mx-md-5 my-sm-4 my-md-auto"
            range
            defaultValue={[0, 20]}
            min={0}
            max={3000}
            onChange={onSliderHandler}
          />
          <Rate className="w-50" />
          <Button height="30px" className="w-50">
            Search
          </Button>
        </Col>
      </Row>
    </FilterBarStyled>
  );
};

export default FilterBar;
