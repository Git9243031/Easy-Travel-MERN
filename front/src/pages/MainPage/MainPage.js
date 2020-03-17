import React, { useEffect, useState } from "react";
import { Input, Row } from "antd";
import CarouselSlider from "../../components/CarouselSlider/CarouselSlider";
import { Content } from "../../components/Content/Content.styles";
import FilterBar from "../../components/FilterBar/FilterBar";
import Card from "../../components/Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/modules/products";

import Loader from "react-loader-spinner";

const MainPage = () => {
  const dispatch = useDispatch();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchWord, setSearchWord] = useState("");
  const { products } = useSelector(state => state.products);

  const onFilter = e => {
    setSearchWord(e.target.value);
  };
  // let filtered = products;

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  useEffect(() => {
    if (searchWord === "") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(product => {
        return (
          product.title.toLowerCase().indexOf(searchWord.toLowerCase()) !== -1
        );
      });
      setFilteredProducts(filtered);
    }
  }, [products, searchWord]);

  // useEffect(() => {
  //   if (searchWord.trim() === "") {
  //     setFilteredProducts();
  //   } else {
  //   }
  // }, [searchWord]);

  return (
    <>
      <CarouselSlider />
      <FilterBar />
      <Content>
        <Input
          name="filter"
          placeholder="Filter..."
          className="mb-4"
          onChange={onFilter}
        />
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 24 }}>
          <Loader type="Plane" color="#000" height={80} width={80} />
          {products.length >= 0 ? (
            Array(10)
              .fill(null)
              .map(() =>
                filteredProducts.map((product, index) => (
                  <Card key={index} product={product} />
                ))
              )
          ) : (
            <Loader type="Plane" color="#000" height={80} width={80} />
          )}
        </Row>
      </Content>
    </>
  );
};

export default MainPage;
