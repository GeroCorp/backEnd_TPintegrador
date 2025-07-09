import {Router} from "express";
import { getAllSales, createNewSale } from "../controllers/sales.controller.js";
import { validateSale } from "../middlewares/middlewares.js";

const router = Router();

router.get("/", getAllSales);

router.post("/", validateSale, createNewSale);

export default router;