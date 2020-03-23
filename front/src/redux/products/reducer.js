import { handleActions } from "redux-actions";
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

const initialState = {
  products: [],
  product: {},
  isLoading: false,
  error: null
};

export default handleActions(
  {
    [createProductRequest]: state => ({
      ...state,
      isLoading: true,
      error: null
    }),
    [createProductSuccess]: state => ({
      ...state,
      isLoading: false
    }),
    [createProductFailure]: (state, action) => ({
      ...state,
      error: action.error,
      isLoading: false
    }),
    [fetchProductsRequest]: state => ({
      ...state,
      isLoading: true,
      error: null
    }),
    [fetchProductsSuccess]: (state, action) => ({
      ...state,
      products: action.payload,
      isLoading: false
    }),
    [fetchProductsFailure]: (state, action) => ({
      ...state,
      error: action.error,
      isLoading: false
    }),
    [fetchProductRequest]: state => ({
      ...state,
      isLoading: true,
      error: null
    }),
    [fetchProductSuccess]: (state, action) => ({
      ...state,
      product: action.payload,
      isLoading: false
    }),
    [fetchProductFailure]: (state, action) => ({
      ...state,
      error: action.error,
      isLoading: false
    }),

    [editProductRequest]: state => ({
      ...state,
      isLoading: true,
      error: null
    }),
    [editProductSuccess]: state => ({
      ...state,
      isLoading: false
    }),
    [editProductFailure]: (state, action) => ({
      ...state,
      error: action.error,
      isLoading: false
    })
  },
  initialState
);
