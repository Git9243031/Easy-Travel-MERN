import { createActions } from "redux-actions";

export const {
  fetchProductsRequest,
  fetchProductsSuccess,
  fetchProductsFailure,
  fetchProductRequest,
  fetchProductSuccess,
  fetchProductFailure,
  createProductRequest,
  createProductSuccess,
  createProductFailure
} = createActions(
  "FETCH_PRODUCTS_REQUEST",
  "FETCH_PRODUCTS_SUCCESS",
  "FETCH_PRODUCTS_FAILURE",
  "FETCH_PRODUCT_REQUEST",
  "FETCH_PRODUCT_SUCCESS",
  "FETCH_PRODUCT_FAILURE",
  "CREATE_PRODUCT_REQUEST",
  "CREATE_PRODUCT_SUCCESS",
  "CREATE_PRODUCT_FAILURE"
);
