import movieModels from "../models/movie.models.js";
import { productRoutes } from "../routes/index.js";

export const getAllMovies = async(req, res) =>{
    try{

        const [ rows ]= await movieModels.selectAllMovies();

        res.status(500).json({
            payload: rows,
            message: rows.lenght === 0 ? `Movies not found` : `Movies founded`
        })
    }catch (e){
        console.error(e);
        res.status(500).json({
            error: `Internal server error`
        })
    }
}

export const getMovieByID = async (req, res) =>{
    try {
        let {id} = req.params;

        const [rows]= await movieModels.selectMovieByID(id);

        if (rows.lenght === 0){
            return res.status(404).json({
                error: `Product with ID: ${id} no founded`
            })
        }

        res.status(200).json({
            payload: rows
        })

    } catch (e) {
        console.error(e)
        res.status(500).json({
            error:`Internal server error`
        })
    }
}

export const createNewMovie = async (req, res) =>{
    try {
        
        let {titulo, genero, clasificacion, duracion, sinopsis, imagen} = req.body;

        if(!titulo || !genero || !clasificacion || !duracion || !sinopsis || !imagen) {
            return res.status(400).json({
                message: "Invalid values, make sure to send Titulo, Genero, Clasificacion, Duracion, Sinopsis and Imagen"
            })
        }

        const [rows] = await movieModels.insertNewMovie(titulo, genero, clasificacion, duracion, sinopsis, imagen);

        res.status(201).json({
            message: `Movie added succesfullly`,
            movieId: rows.insertId
        })

    } catch (e) {
        console.error(e)

        res.status(500).json({
            message: "Interal server error",
            error: e.message
        })
    }
}