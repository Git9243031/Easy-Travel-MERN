import { handleActions } from "redux-actions";
import { setFilters, setUserFilters } from "./actions";

const initialState = {
  initFilters: {
    continent: [],
    minPrice: 0,
    maxPrice: 10000,
    stars: 5
  },
  userFilters: {}
};

export default handleActions(
  {
    [setFilters]: (state, action) => ({
      ...state,
      initFilters: action.payload
    }),
    [setUserFilters]: (state, action) => ({
      ...state,
      userFilters: action.payload
    })
  },
  initialState
);
