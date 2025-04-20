import express from "express";
import { generatePortfolio } from "../controllers/portfolioController.js";

const router = express.Router();

router.post("/generate", generatePortfolio);

export default router;
