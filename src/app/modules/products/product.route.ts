import { Router } from "express";
import { ProductsController } from "./products.controller";
import validationRequset from "../../middeweres/validationRequest";
import { validationSchema } from "./products.Vlidation";

const router = Router();
router.post(
  "/create-products",
  //   validationRequset(validationSchema.productsValidationSchema),
  ProductsController.createProducts
);

export const ProductRouter = router;
