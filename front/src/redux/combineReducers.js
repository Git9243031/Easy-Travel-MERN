import { combineReducers } from "redux";
import productsReducer from "./products/reducer";
import { themeReducer } from "./theme/theme";
import { filtersReducer } from "./filters/filters";

export const reducers = combineReducers({
  products: productsReducer,
  theme: themeReducer,
  filters: filtersReducer
});
