import { ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART } from "./constants";

export const cartData = (data = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.warn("add to cart", action);
      return [action.data, ...data];
    case REMOVE_FROM_CART:
      console.warn("remove from cart", action);
      data.length = data.length ? data.length - 1 : [];
      return [...data];
    case EMPTY_CART:
      console.warn("remove from cart", action);
      data = [];
      return [...data];
    default:
      return data;
  }
};
