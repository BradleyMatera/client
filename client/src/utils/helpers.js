export const formatPrice = (price) => {
  return `$${price.toFixed(2)}`;
};

export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
