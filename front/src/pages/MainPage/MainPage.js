import React, { useEffect, useState } from "react";
import { Input } from "antd";
import CarouselSlider from "../../components/CarouselSlider/CarouselSlider";
import { Content } from "../../components/Content/Content.styles";
import FilterBar from "../../components/FilterBar/FilterBar";
import Card from "../../components/Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/modules/products";

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
        {filteredProducts.map((product, index) => (
          <Card key={index} product={product} />
        ))}
      </Content>
    </>
  );
};

export default MainPage;
