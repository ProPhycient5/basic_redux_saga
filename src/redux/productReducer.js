import { PRODUCT_LIST } from "./constants";

export const productData = (data = [], action) => {
  switch (action.type) {
    case PRODUCT_LIST:
      console.log("PRODUCT_LIST", action);
      return [action.data];
    default:
      return data;
  }
};
