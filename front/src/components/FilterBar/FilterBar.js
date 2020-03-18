import React, { useEffect, useState } from "react";
import { Row, Col, Rate } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { filterProducts } from "../../redux/modules/products";

import SelectFilter from "../SelectFilter/SelectFilter";
import { FilterBarStyled } from "./FilterBar.styles";
import { SliderStyled } from "../SliderRange/SliderRange.styles";
import { Button } from "../Button/Button.styles";

import { getUnique } from "../../utils/getUnique";
import { getMax } from "../../utils/getMax";
import { getMin } from "../../utils/getMin";

const FilterBar = () => {
  const dispatch = useDispatch();

  const { products } = useSelector(state => state.products);

  const [filter, setFilter] = useState({
    continent: [],
    minPrice: 0,
    maxPrice: 10000,
    stars: 5
  });
  const [continent, setContinent] = useState([]);
  const [maxPrice, setMaxPrice] = useState(1000000);
  const [minPrice, setMinPrice] = useState(0);
  const [stars, setstars] = useState(5);

  useEffect(() => {
    console.log("Filter: ", filter);
  }, [filter]);

  useEffect(() => {
    setContinent(getUnique(products, "continent"));
    setMaxPrice(getMax(products, "price"));
    setMinPrice(getMin(products, "price"));
    setstars(getMax(products, "stars"));
  }, [products]);

  const onSliderHandler = e => {
    console.log("Slider: ", e);
    setFilter({
      ...filter,
      minPrice: e[0],
      maxPrice: e[1]
    });
  };

  const onSelectHandler = e => {
    console.log("Select: ", e);
    setFilter({
      ...filter,
      continent: e
    });
  };

  const onStarsHandler = e => {
    console.log("Stars: ", e);
    setFilter({
      ...filter,
      stars: e
    });
  };

  const onFilterHandler = () => {
    dispatch(filterProducts(filter, products));
  };

  return (
    <FilterBarStyled className="bg-dark">
      <Row gutter={[16, 16]} className="py-4 px-4 m-0">
        <Col className="w-100 d-md-flex justify-content-between">
          <SelectFilter items={continent} onSelectHandler={onSelectHandler} />
          <SliderStyled
            width="100%"
            className="d-block mx-auto mx-md-5 my-sm-4 my-md-auto"
            range
            defaultValue={[minPrice, maxPrice]}
            min={0}
            max={10000}
            onChange={onSliderHandler}
          />
          <Rate
            className="w-50"
            defaultValue={stars}
            onChange={onStarsHandler}
          />
          <Button height="30px" className="w-50" onClick={onFilterHandler}>
            Search
          </Button>
        </Col>
      </Row>
    </FilterBarStyled>
  );
};

export default FilterBar;
