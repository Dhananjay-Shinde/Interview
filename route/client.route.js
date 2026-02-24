import express from "express";
import {
  createOrder,
  getBalance,
  getOrderById,
} from "../controllers/client.controller.js";

const app = express();

const router = express.Router();

router.post("/orders", createOrder);
router.get(`/orders/:id`, getOrderById);
router.get("/wallet/balance", getBalance);

export default router;
