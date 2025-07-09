import {Router} from "express";
import { createNewMovie, getAllMovies, getMovieByID, modifyMovie, movieRemove } from "../controllers/movies.controller.js";
import { validateId, validateMovie } from "../middlewares/middlewares.js";

const router = Router();

router.get("/", getAllMovies);

router.get("/:id",validateId, getMovieByID);

router.post("/", validateMovie, createNewMovie);

router.put("/:id", validateMovie, modifyMovie);

router.delete("/:id", validateId, movieRemove);

export default router;