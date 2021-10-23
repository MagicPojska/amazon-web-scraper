import express from "express";
import {
  getProduct,
  getProductOffers,
  getProductReviews,
  getProuctsSearch,
} from "../controllers/products.js";

const router = express.Router();

router.get("/:productId", getProduct);
router.get("/:productId/reviews", getProductReviews);
router.get("/:productId/offers", getProductOffers);
router.get("/search/:searchQuery", getProuctsSearch);

export default router;
