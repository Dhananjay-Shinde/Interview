import express from "express";
import credit from "../controllers/admin.controller";
import debit from "../controllers/admin.controller";

const router = express.Router();

router.post("/credit", credit);
router.post("/debit", debit);

export default router;
