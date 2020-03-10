import React from "react";
import CarouselSlider from "../../components/CarouselSlider/CarouselSlider";
import { Content } from "../../components/Content/Content.styles";
import FilterBar from "../../components/FilterBar/FilterBar";
import Card from "../../components/Card/Card";

const MainPage = () => {
  return (
    <>
      <CarouselSlider />
      <FilterBar />
      <Content>
        
        <Card />
      </Content>
    </>
  );
};

export default MainPage;
