import express from "express";
import { credit, debit } from "../controllers/admin.controller.js";

const router = express.Router();

router.route("/credit").post(credit);
router.route("/debit").post(debit);

export default router;
