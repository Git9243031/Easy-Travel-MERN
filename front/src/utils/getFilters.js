import { getMax } from "./getMax";
import { getMin } from "./getMin";
import { getUnique } from "./getUnique";

export const getFilters = data => {
  const filters = {
    continent: getUnique(data, "continent"),
    minPrice: getMin(data, "price"),
    maxPrice: getMax(data, "price"),
    stars: getMax(data, "stars")
  };
  return filters;
};
