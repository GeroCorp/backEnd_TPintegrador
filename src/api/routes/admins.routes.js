import {Router} from "express";
import { getAllAdmins } from "../controllers/admins.controllers.js";
import { validateId, validateMovie } from "../middlewares/middlewares.js";

const router = Router();

router.get("/", getAllAdmins)

export default router;
