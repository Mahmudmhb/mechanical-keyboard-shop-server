import { TProduct } from "./products.interfase";
import { Products } from "./products.model";

const createProductsIntoDB = async (payload: TProduct) => {
  const result = await Products.create(payload);
  return result;
};

export const ProductsService = {
  createProductsIntoDB,
};
