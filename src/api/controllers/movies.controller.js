import movieModels from "../models/movie.models.js";

export const getAllMovies = async(req, res) =>{
    try{

        const [ rows ]= await movieModels.selectAllMovies();

        res.status(200).json({
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
        
        let {titulo, genero, duracion, sinopsis, imagen, tags, clasificacion} = req.body;

        if(!titulo || !genero || !clasificacion || !duracion || !sinopsis || !imagen || !tags) {
            return res.status(400).json({
                message: "Invalid values, make sure to send Titulo, Genero, Clasificacion, Duracion, Sinopsis, Imagen and tags"
            })
        }

        const [rows] = await movieModels.insertNewMovie(
            titulo,
            genero, // categoría
            duracion,
            sinopsis,
            imagen,
            tags,
            clasificacion
        );


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

export const modifyMovie = async(req, res) =>{
    try {
        /*
        let {id, titulo, genero, clasificacion, duracion, sinopsis, imagen} = req.body;

        if(!id || !titulo || !genero || !clasificacion || !duracion || !sinopsis || !imagen){
            return res.status(400).json({
                message: "Faltan campos requeridos"
            })
        }*/

        const [result] = await movieModels.updateMovie(id, titulo, genero, clasificacion, duracion, sinopsis, imagen)

        if (result.affectedRows === 0){
            return res.status(400).json({
                message: "No se actualizo la pelicula"
            })
        }

        res.status(200).json({
            message: "Movie updated"
        })

    } catch (e) {
        console.error(e)
        
        res.status(500).json({
            message:"Internal server error",
            e: e.message
        })
    }
}

export const movieRemove = async (req, res) => {

    try {
        let {id} = req.params;

        /*
        if(!id){
            return res.status(400).json({
                message:`Producto ${id} removido`
            })
        }*/

        let [result] = await movieModels.deleteMovie(id);

        if(result.affectedRows === 0) {
            return res.status(400).json({
                message:`Movie with id ${id} not found`
            })
        }

        return res.status(200).json({
            message: `Movie removed`
        })

    } catch (error) {
        console.error("Error en DELETE /movies/:id", error);

        res.status(500).json({
            message: `Error al eliminar producto con id ${id}`, error,
            error: error.message
        })
    }
}