import { PRODUCT_LIST } from "./constants";

export const productList = () => {
  console.log("action productList");
  let data = "hello";
  return {
    type: PRODUCT_LIST,
    data,
  };
};
