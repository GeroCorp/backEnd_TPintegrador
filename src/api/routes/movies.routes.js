import {Router} from "express";
import { createNewMovie, getAllMovies, getMovieByID } from "../controllers/movies.controller.js";

const router = Router();

router.get("/", getAllMovies)

router.get("/:id", getMovieByID)

router.post("/", createNewMovie)

export default router;