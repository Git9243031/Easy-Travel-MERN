// import React, { useEffect, useState } from "react";
// import { Row, Col, Rate } from "antd";
// import { useDispatch, useSelector } from "react-redux";
// import { filterProducts } from "../../redux/modules/products";

// import SelectFilter from "../SelectFilter/SelectFilter";
// import { FilterBarStyled } from "./FilterBar.styles";
// import { SliderStyled } from "../SliderRange/SliderRange.styles";
// import { Button } from "../Button/Button.styles";

// import { getUnique } from "../../utils/getUnique";
// import { getMax } from "../../utils/getMax";
// import { getMin } from "../../utils/getMin";

// const FilterBar = () => {
//   const dispatch = useDispatch();

//   const [continent, setContinent] = useState([]);
//   const [maxPrice, setMaxPrice] = useState(0);
//   const [minPrice, setMinPrice] = useState(0);
//   const [stars, setStars] = useState(5);

//   const [filterOptions, setFilterOptions] = useState({
//     continent: [],
//     minPrice: 0,
//     maxPrice: 10000,
//     stars: 0
//   });

//   const { products } = useSelector(state => state.products);

//   useEffect(() => {
//     setFilterOptions({
//       ...filterOptions,
//       continent,
//       maxPrice,
//       minPrice,
//       stars
//     });
//   }, [continent, maxPrice, minPrice, stars]);

//   useEffect(() => {
//     setContinent(getUnique(products, "continent"));
//     setStars(getMax(products, "stars"));
//   }, [products]);

//   const onSelectHandler = e => {};

//   return (
//     <FilterBarStyled className="bg-dark">
//       <div
//         onClick={() => {
//           filterOptions.continent.push("Tahs");
//           console.log(filterOptions.continent);
//         }}
//       >
//         {filterOptions.continent}
//       </div>
//       <Row gutter={[16, 16]} className="py-4 px-4 m-0">
//         <Col className="w-100 d-md-flex justify-content-between">
//           <SelectFilter
//             items={filterOptions.continent}
//             defaultValue={filterOptions.continent}
//             onSelectHandler={onSelectHandler}
//           />
//           <SliderStyled
//             width="100%"
//             className="d-block mx-auto mx-md-5 my-sm-4 my-md-auto"
//             range
//             defaultValue={[minPrice, maxPrice]}
//             min={0}
//             max={10000}
//             // onChange={onSliderHandler}
//           />
//           <Rate
//             className="w-50"
//             defaultValue={stars}
//             // onChange={onStarsHandler}
//           />
//           <Button
//             height="30px"
//             className="w-50"
//             // onClick={onFilterHandler}
//           >
//             Search
//           </Button>
//         </Col>
//       </Row>
//     </FilterBarStyled>
//   );
// };

// export default FilterBar;
