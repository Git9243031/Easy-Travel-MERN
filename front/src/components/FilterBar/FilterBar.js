import React, { useEffect, useState } from "react";
import { Row, Col, Rate } from "antd";
import { useDispatch, useSelector } from "react-redux";

import SelectFilter from "../SelectFilter/SelectFilter";
import { FilterBarStyled } from "./FilterBar.styles";
import { SliderStyled } from "../SliderRange/SliderRange.styles";
import { Button } from "../Button/Button.styles";

import { setUserFilters } from "../../redux/filters/filters";

const FilterBar = () => {
  const dispatch = useDispatch();
  const filters = useSelector(state => state.filters.initFilters);
  const { continent, minPrice, maxPrice, stars } = filters;

  const [updateFilter, setUpdateFilter] = useState({ ...filters });

  React.useEffect(() => {
    setUpdateFilter({ ...filters });

    console.log("Effect updateFilter: ", updateFilter);
  }, [filters]);

  const onSelectHandler = e => {
    console.log("updateFilter: ", updateFilter);
    setUpdateFilter({
      ...updateFilter,
      continent: e
    });
  };
  const onSliderHandler = e => {
    console.log("updateFilter: ", updateFilter);
    setUpdateFilter({
      ...updateFilter,
      minPrice: e[0],
      maxPrice: e[1]
    });
  };
  const onStarsHandler = e => {
    console.log("updateFilter: ", updateFilter);
    setUpdateFilter({
      ...updateFilter,
      stars: e
    });
  };
  const onFilterHandler = () => {
    dispatch(setUserFilters(updateFilter));
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
            min={minPrice}
            max={maxPrice}
            onChange={onSliderHandler}
          />
          <Rate
            className="w-50"
            // defaultValue={stars}
            value={updateFilter.stars}
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
