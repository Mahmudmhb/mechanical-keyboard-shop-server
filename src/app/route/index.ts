import { Router } from "express";
import { ProductRouter } from "../modules/products/product.route";
const router = Router();

const modulsRoute = [
  {
    path: "/products",
    route: ProductRouter,
  },
];
modulsRoute.forEach((route) => router.use(route.path, route.route));
export default router;
