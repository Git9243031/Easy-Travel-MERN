import { createActions } from "redux-actions";

export const { setFilters, setUserFilters } = createActions(
  "SET_FILTERS",
  "SET_USER_FILTERS"
);
