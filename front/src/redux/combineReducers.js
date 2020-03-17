import { combineReducers } from "redux";
import { productsReducer } from "./modules/products";
import { themeReducer } from "./modules/theme";

export const reducers = combineReducers({
  products: productsReducer,
  theme: themeReducer
});
