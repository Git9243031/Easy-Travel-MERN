import React from "react";
import SelectFilter from "../SelectFilter/SelectFilter";
import { FilterBarStyled } from "./FilterBar.styles";
import { Row, Col, Rate } from "antd";
import { SliderStyled } from "../SliderRange/SliderRange.styles";
import { Button } from "../Button/Button.styles";

const FilterBar = ({ items }) => {
  return (
    <FilterBarStyled className="bg-dark">
      <Row gutter={[16, 16]} className="py-4 px-4 m-0">
        <Col className="w-100 d-md-flex justify-content-between">
          <SelectFilter items={["Asia", "Europe", "Africa"]} />
          <SliderStyled
            width="100%"
            className="d-block mx-auto mx-md-5 my-sm-4 my-md-auto"
            range
            defaultValue={[20, 50]}
          />
          <Rate className="w-50" />
          <Button height="30px" className="w-50">
            Search
          </Button>
        </Col>

        {/* <Col xs={24} lg={6} className="d-flex justify-content-center">
          <SelectFilter items={["Asia", "Europe", "Africa"]} />
        </Col>
        <Col xs={24} lg={6} className="d-flex justify-content-end">
          <SliderStyled range defaultValue={[20, 50]} />
        </Col>
        <Col xs={24} lg={6} className="d-flex justify-content-end">
          <Rate />
        </Col>
        <Col xs={24} lg={6} className="d-flex justify-content-end">
          <Button width="200px" widthMl="100%">
            Search
          </Button>
        </Col> */}
      </Row>
    </FilterBarStyled>
  );
};

export default FilterBar;
