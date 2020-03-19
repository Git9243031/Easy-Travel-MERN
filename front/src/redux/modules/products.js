import { createAction, handleActions } from "redux-actions";
import { combineReducers } from "redux";

import axios from "axios";

//#region Actions
export const PRODUCTS_ACTIONS = {
  fetchProductsRequest: "PRODUCTS > FETCH_REQUEST",
  fetchProductsSuccess: "PRODUCTS > FETCH_SUCCESS",
  fetchProductsFailure: "PRODUCTS > FETCH_FAILURE",

  fetchProductRequest: "PRODUCTS > FETCH_PRODUCT_REQUEST",
  fetchProductSuccess: "PRODUCTS > FETCH_PRODUCT_SUCCESS",
  fetchProductFailure: "PRODUCTS > FETCH_PRODUCT_FAILURE",

  createProductRequest: "PRODUCTS > CREATE_REQUEST",
  createProductSuccess: "PRODUCTS > CREATE_SUCCESS",
  createProductFailure: "PRODUCTS > CREATE_FAILURE",

  filterProductsRequest: "PRODUCTS > FILTER_REQUEST",
  filterProductsSuccess: "PRODUCTS > FILTER_SUCCESS",
  filterProductsFailure: "PRODUCTS > FILTER_FAILURE",

  filterOptionSet: "PRODUCTS > FILTER_OPTION_SET"
};

export const fetchProductsRequest = createAction(
  PRODUCTS_ACTIONS.fetchProductsRequest
);
export const fetchProductsSuccess = createAction(
  PRODUCTS_ACTIONS.fetchProductsSuccess
);
export const fetchProductsFailure = createAction(
  PRODUCTS_ACTIONS.fetchProductsFailure
);

export const fetchProductRequest = createAction(
  PRODUCTS_ACTIONS.fetchProductRequest
);
export const fetchProductSuccess = createAction(
  PRODUCTS_ACTIONS.fetchProductSuccess
);
export const fetchProductFailure = createAction(
  PRODUCTS_ACTIONS.fetchProductFailure
);

export const createProductRequest = createAction(
  PRODUCTS_ACTIONS.createProductRequest
);
export const createProductSuccess = createAction(
  PRODUCTS_ACTIONS.createProductSuccess
);
export const createProductFailure = createAction(
  PRODUCTS_ACTIONS.createProductFailure
);

export const filterProductsRequest = createAction(
  PRODUCTS_ACTIONS.filterProductsRequest
);
export const filterProductsSuccess = createAction(
  PRODUCTS_ACTIONS.filterProductsSuccess
);
export const filterProductsFailure = createAction(
  PRODUCTS_ACTIONS.filterProductsFailure
);

export const filterOptionSet = createAction(PRODUCTS_ACTIONS.filterOptionSet);

//#endregion

//#region Reducers
const products = handleActions(
  {
    [PRODUCTS_ACTIONS.fetchProductsSuccess]: (state, action) => action.payload
  },
  []
);

const product = handleActions(
  {
    [PRODUCTS_ACTIONS.fetchProductSuccess]: (state, action) => action.payload
  },
  {}
);

const filtered = handleActions(
  {
    [PRODUCTS_ACTIONS.filterProductsSuccess]: (state, action) => action.payload
  },
  []
);

export const productsReducer = combineReducers({
  products,
  filtered,
  product
});
//#endregion

//#region Thunks
export const fetchProduct = id => dispatch => {
  dispatch(fetchProductRequest(id));
  return axios
    .get(`/api/products/${id}`)
    .then(({ data }) => {
      console.log("data: ", data);
      dispatch(fetchProductSuccess(data));
    })
    .catch(err => dispatch(fetchProductFailure(err)));
};

export const fetchProducts = () => dispatch => {
  dispatch(fetchProductsRequest());
  return axios
    .get("/api/products")
    .then(({ data }) => {
      console.log("data: ", data);
      dispatch(fetchProductsSuccess(data));
    })
    .catch(err => dispatch(fetchProductsFailure(err)));
};

export const createProduct = (inputValues, history) => dispatch => {
  dispatch(createProductRequest(inputValues));
  return axios
    .post("/api/products/", inputValues)
    .then(({ data }) => {
      dispatch(createProductSuccess(data));
      history.push("/");
    })
    .catch(err => dispatch(createProductFailure(err)));
};

export const filterProducts = (filterOptions, products) => dispatch => {
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

  dispatch(filterProductsSuccess(filteredList));

  //  dispatch(fetchProductFailure();
};

//#endregion
