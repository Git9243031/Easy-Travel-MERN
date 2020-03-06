import React from "react";
import CarouselSlider from "../components/CarouselSlider/CarouselSlider";
import { Content } from "../components/Content/Content.styles";
import FilterBar from "../components/FilterBar/FilterBar";

const MainPage = () => {
  return (
    <div>
      <CarouselSlider />
      <FilterBar />
      <Content></Content>
    </div>
  );
};

export default MainPage;
