import axios from "axios";
import {
  fetchProductsRequest,
  fetchProductsSuccess,
  fetchProductsFailure,
  fetchProductRequest,
  fetchProductSuccess,
  fetchProductFailure,
  createProductRequest,
  createProductSuccess,
  createProductFailure,
  editProductRequest,
  editProductSuccess,
  editProductFailure
} from "./actions";
import { setFilters, setUserFilters } from "../filters/actions";
import { getFilters } from "../../utils/getFilters";

//#region Thunks
export const fetchProduct = id => dispatch => {
  dispatch(fetchProductRequest());
  return axios
    .get(`/api/products/${id}`)
    .then(({ data }) => {
      dispatch(fetchProductSuccess(data));
    })
    .catch(err => dispatch(fetchProductFailure(err)));
};

export const fetchProducts = () => dispatch => {
  dispatch(fetchProductsRequest());
  return axios
    .get("/api/products")
    .then(({ data }) => {
      // console.log("data2: ", data);
      const filters = getFilters(data);
      dispatch(setFilters(filters));
      dispatch(setUserFilters(filters));
      dispatch(fetchProductsSuccess(data));
    })
    .catch(err => dispatch(fetchProductsFailure(err)));
};

export const createProduct = (inputValues, history) => dispatch => {
  dispatch(createProductRequest());
  return axios
    .post("/api/products/", inputValues)
    .then(({ data }) => {
      dispatch(createProductSuccess());
      history.push(`/products/${data._id}`);
    })
    .catch(err => dispatch(createProductFailure(err)));
};

export const editProduct = (inputValues, history) => dispatch => {
  dispatch(editProductRequest());
  return axios
    .put("/api/products/", inputValues) //TODO: put route on the server
    .then(() => {
      dispatch(editProductSuccess());
      history.push(`/`);
    })
    .catch(err => dispatch(editProductFailure(err)));
};
//#endregion
