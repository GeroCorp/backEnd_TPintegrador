import {Router} from "express";
import { getAllCollectibles,getCollectibleById, createCollectible, modifyCollectible, removeCollectible } from "../controllers/collectible.controllers.js";
import { validateId, validateCollectible } from "../middlewares/middlewares.js";

const router = Router();


// Cambiar por urls de frontTP ///////
router.get("/", getAllCollectibles);

router.get("/:id", validateId, getCollectibleById);

router.post("/", validateCollectible, createCollectible);

router.put("/", validateCollectible, modifyCollectible);

router.delete("/:id", validateId, removeCollectible);

export default router;