import connection from "../database/db.js";

const selectAllMovies = async() => {
    let sql = "SELECT * FROM peliculas";

    return await connection.query(sql);
}

const selectMovieByID = async(id) =>{
    let sql = `SELECT * FROM peliculas WHERE id = ?`

    return await connection.query(sql, id);
}

const insertNewMovie = async (titulo, genero, clasificacion, duracion, sinopsis, imagen) => {
    let sql = `INSERT INTO peliculas (titulo, genero, clasificacion, duracion, sinopsis, imagen) VALUES (?, ?, ?, ?, ?, ?)`;

    return await connection.query(sql, [titulo, genero, clasificacion, duracion, sinopsis, imagen]);
}

export default {
    selectAllMovies,
    selectMovieByID,
    insertNewMovie
}