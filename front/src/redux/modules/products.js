import { createAction, handleActions } from "redux-actions";
import { combineReducers } from "redux";

import axios from "axios";

//#region Actions
export const PRODUCTS_ACTIONS = {
  fetchProductsRequest: "PRODUCTS > FETCH_REQUEST",
  fetchProductsSuccess: "PRODUCTS > FETCH_SUCCESS",
  fetchProductsFailure: "PRODUCTS > FETCH_FAILURE",

  createProductRequest: "PRODUCTS > CREATE_REQUEST",
  createProductSuccess: "PRODUCTS > CREATE_SUCCESS",
  createProductFailure: "PRODUCTS > CREATE_FAILURE"

  // deleteCategoryRequest: 'PRODUCTS > DELETE_REQUEST',
  // deleteCategorySuccess: 'PRODUCTS > DELETE_SUCCESS',
  // deleteCategoryFailure: 'PRODUCTS > DELETE_FAILURE',

  // updateCategoryRequest: 'PRODUCTS > UPDATE_REQUEST',
  // updateCategorySuccess: 'PRODUCTS > UPDATE_SUCCESS',
  // updateCategoryFailure: 'PRODUCTS > UPDATE_FAILURE',
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

export const createProductRequest = createAction(
  PRODUCTS_ACTIONS.createProductRequest
);
export const createProductSuccess = createAction(
  PRODUCTS_ACTIONS.createProductSuccess
);
export const createProductFailure = createAction(
  PRODUCTS_ACTIONS.createProductFailure
);

// export const deleteCategoryRequest = createAction(PRODUCTS_ACTIONS.deleteCategoryRequest)
// export const deleteCategorySuccess = createAction(PRODUCTS_ACTIONS.deleteCategorySuccess)
// export const deleteCategoryFailure = createAction(PRODUCTS_ACTIONS.deleteCategoryFailure)

// export const updateCategoryRequest = createAction(PRODUCTS_ACTIONS.updateCategoryRequest)
// export const updateCategorySuccess = createAction(PRODUCTS_ACTIONS.updateCategorySuccess)
// export const updateCategoryFailure = createAction(PRODUCTS_ACTIONS.updateCategoryFailure)
//#endregion

//#region Reducers
const products = handleActions(
  {
    [PRODUCTS_ACTIONS.fetchProductsSuccess]: (state, action) => action.payload
  },
  []
);

export const productsReducer = combineReducers({
  products
});
//#endregion

//#region Thunks
export const fetchProducts = () => dispatch => {
  dispatch(fetchProductsRequest());
  console.log("redux tut");
  return axios("/api/products", { method: "GET" })
    .then(({ data }) => dispatch(fetchProductsSuccess(data)))
    .catch(err => dispatch(fetchProductsFailure(err)));
};

export const createProduct = inputValues => dispatch => {
  dispatch(createProductRequest(inputValues));
  console.log("create prod");
  return axios
  .post("http://localhost:5000/api/products/", inputValues)
  .then(({ data }) => {
    console.log("created data: ", data);
      dispatch(createProductSuccess(data));
      alert("product successfully uploaded");
      // props.history.push("/");
    })
    .catch(err => dispatch(createProductFailure(err)));

  //  axios('/api/category/save', { data: values, method: 'POST' })
  //     .then(response => dispatch(createProductSuccess(response.data)))
  //     .catch(err => dispatch(createProductFailure(err)))
};

// export const updateCategory = (values, id) => dispatch => {
//     dispatch(updateCategoryRequest(values))

//     return axios('/api/category/update/' + id, { data: values, method: 'POST' })
//         .then(response => dispatch(updateCategorySuccess(response.data)))
//         .catch(err => dispatch(updateCategoryFailure(err)))
// }

// export const deleteCategory = values => dispatch => {
//     dispatch(deleteCategoryRequest(values))

//     return axios('/api/category/delete/' + values, {method: 'POST'})
//         .then((response) => {
//             dispatch(deleteCategorySuccess(response.data))
//         })
//         .catch(err => dispatch(deleteCategoryFailure(err)))
// }

//#endregion
