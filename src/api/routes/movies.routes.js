import {Router} from "express";
import { createNewMovie, getAllMovies, getMovieByID, modifyMovie, movieRemove } from "../controllers/movies.controller.js";

const router = Router();

router.get("/", getAllMovies)

router.get("/:id", getMovieByID)

router.post("/", createNewMovie)

router.put("/:id", modifyMovie)

router.delete("/:id", movieRemove)

export default router;