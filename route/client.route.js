import express from "express";
import {
  createOrder,
  getBalance,
  getOrderById,
} from "../controllers/client.controller.js";

const app = express();

const router = express.Router();

router.route("/orders").post(createOrder);
router.route(`/orders/:id`).get(getOrderById);
router.route("/wallet/balance").get(getBalance);
export default router;
