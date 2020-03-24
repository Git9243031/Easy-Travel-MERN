import React, { useEffect, useState } from "react";
import { Input, Row } from "antd";
import CarouselSlider from "../../components/CarouselSlider/CarouselSlider";
import { Content } from "../../components/Content/Content.styles";
import FilterBar from "../../components/FilterBar/FilterBar";
import Card from "../../components/Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/products/thunks";

import Loader from "react-loader-spinner";

const getFilteredProducts = (products, filterOptions) => {
  let filteredList = products.filter(
    product => product.price >= filterOptions.minPrice
  );

  filteredList = filteredList.filter(
    product => product.price <= filterOptions.maxPrice
  );

  filteredList = filteredList.filter(
    product => product.stars <= filterOptions.stars
  );

  filteredList = filteredList.filter(product =>
    filterOptions.continent.includes(product.continent)
  );

  return filteredList;
};

const MainPage = () => {
  const dispatch = useDispatch();

  const [searchWord, setSearchWord] = useState("");
  const [searchWordProducts, setSearchWordProducts] = useState([]);
  const [productList, setProductList] = useState([]);

  const { products } = useSelector(state => state.products);
  const { initFilters, userFilters } = useSelector(state => state.filters);

  useEffect(() => {
    const filterOptions =
      Object.keys(userFilters).length === 0 ? initFilters : userFilters;
    setProductList(getFilteredProducts(products, filterOptions));
  }, [products, initFilters, userFilters]);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    if (searchWord.trim() !== "") {
      const searchWordFilter = productList.filter(
        product =>
          product.title.toLowerCase().indexOf(searchWord.toLowerCase()) !== -1
      );
      setSearchWordProducts(searchWordFilter);
    } else {
      setSearchWordProducts([]);
    }
  }, [searchWord, productList]);

  const onFilter = e => {
    setSearchWord(e.target.value);
  };

  const NothingFound = () => (
    <div className="w-100 d-flex justify-content-center">
      <div>
        <h1>Nothing found, change filter options</h1>
        <h2>
          {userFilters.continent &&
            userFilters.continent.length === 0 &&
            "Choose at least one continent"}
        </h2>
        <div className="w-100 d-flex justify-content-center">
          <Loader type="Plane" color="#000" height={80} width={80} />
        </div>
      </div>
    </div>
  );

  return (
    <>
      <CarouselSlider
        slides={[
          "https://i.pinimg.com/originals/da/6a/2e/da6a2ef81dcea467c19d8a24d16ccf37.jpg",
          "https://freedesignfile.com/upload/2017/07/Summer-travel-background-with-slippers-vectors.jpg",
          "https://www.freegreatpicture.com/files/166/14533-synthesis-of-the-desktop.jpg"
        ]}
      />
      <FilterBar />
      <Content>
        <Input
          name="filter"
          placeholder="Filter..."
          className="mb-4"
          onChange={onFilter}
        />
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 24 }}>
          {searchWord.trim() !== "" ? (
            searchWordProducts.length === 0 ? (
              <NothingFound />
            ) : (
              searchWordProducts.map((product, index) => (
                <Card key={index} product={product} />
              ))
            )
          ) : productList.length === 0 ? (
            <NothingFound />
          ) : (
            productList.map((product, index) => (
              <Card key={index} product={product} />
            ))
          )}
        </Row>
      </Content>
    </>
  );
};

export default MainPage;
