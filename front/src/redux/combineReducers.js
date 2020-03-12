import { combineReducers } from "redux";
import { productsReducer } from "./modules/products";

export const reducers = combineReducers({
  products: productsReducer
});
