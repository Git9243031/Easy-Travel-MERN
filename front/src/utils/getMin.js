export const getMin = (items, value) => {
  return Math.min(...items.map(item => item[value]));
};
