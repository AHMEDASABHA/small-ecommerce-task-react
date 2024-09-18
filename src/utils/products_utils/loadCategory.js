import axios from "axios";

export const loadCategoryProducts = async (category) => {
  const response = await axios.get(
    `https://fakestoreapi.com/products/category/${category}`
  );
  return response.data;
};
