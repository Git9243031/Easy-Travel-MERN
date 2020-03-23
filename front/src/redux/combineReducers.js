import { combineReducers } from "redux";
import productsReducer from "./products/reducer";
import { themeReducer } from "./theme/theme";

export const reducers = combineReducers({
  products: productsReducer,
  theme: themeReducer
});
