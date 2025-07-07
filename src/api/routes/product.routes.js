import {Router} from "express";
import { getAllProducts, getProductById, createProduct, modifyProduct, removeProduct } from "../controllers/product.controllers.js";

const router = Router();


// Cambiar por urls de frontTP ///////
router.get("/", getAllProducts);

router.get("/:id", getProductById);

router.post("/", createProduct);

router.put("/", modifyProduct);

router.delete("/:id", removeProduct);

export default router;