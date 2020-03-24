import { createAction, handleActions } from "redux-actions";

//#region Actions
export const FILTERS_ACTIONS = {
         setFilters: "FILTERS > SET_FILTERS",
         setUserFilters: "FILTERS > SET_USER_FILTERS",
       };

export const setFilters = createAction(FILTERS_ACTIONS.setFilters);
export const setUserFilters = createAction(FILTERS_ACTIONS.setUserFilters);
//#endregion

//#region Reducer
const initialState = {
  initFilters: {
    continent: [],
    minPrice: 0,
    maxPrice: 10000,
    stars: 5
  },
  userFilters: {}
};

export const filtersReducer = handleActions(
  {
    [FILTERS_ACTIONS.setFilters]: (state, action) => ({
      ...state,
      initFilters: action.payload
    }),
    [FILTERS_ACTIONS.setUserFilters]: (state, action) => ({
      ...state,
      userFilters: action.payload
    })
  },
  initialState
);
//#endregion
