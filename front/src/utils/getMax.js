export const getMax = (items, value) => {
  return Math.max(...items.map(item => item[value]));
};
