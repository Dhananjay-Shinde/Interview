import express from "express";
import credit from "../controllers/admin.controller.js";
import debit from "../controllers/admin.controller.js";

const router = express.Router();

router.route("/credit").post(credit);
router.route("/debit").post(debit);

export default router;
