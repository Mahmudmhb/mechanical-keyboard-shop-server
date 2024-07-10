import { Request, Response } from "express";
import { ProductsService } from "./products.service";

const createProducts = async (req: Request, res: Response) => {
  const { body } = req.body;
  const result = await ProductsService.createProductsIntoDB(body);
  try {
    res.status(200).json({
      success: true,
      message: "products create successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
    throw new Error(`${error}`);
  }
};
export const ProductsController = {
  createProducts,
};
