import connection from "../database/db.js";

const selectAllMovies = async() => {
    let sql = "SELECT * FROM peliculas";

    return await connection.query(sql);
}

const selectMovieByID = async(id) =>{
    let sql = `SELECT * FROM peliculas WHERE id = ?`

    return await connection.query(sql, id);
}

const insertNewMovie = async (titulo, categoria, clasificacion, duracion, sinopsis, imagen, tags) => {
    let sql = `insert into peliculas (titulo, categoria, duracion, sinopsis, imagen, tags, clasificacion) VALUES (?, ?, ?, ?, ?, ?, ?)`;

    return await connection.query(sql, [titulo, categoria, clasificacion, sinopsis, imagen, tags, duracion]);
}

const updateMovie = async (id, titulo, genero, clasificacion, duracion, sinopsis, tags,imagen) =>{
    let sql = `
        update peliculas
        set titulo = ?, categoria = ?, duracion = ?, sinopsis = ?, imagen = ?, tags = ?, clasificacion = ?
        where id = ?;
    `
    return await connection.query(sql, [titulo, genero,  duracion, sinopsis, imagen, tags, clasificacion, id])

}

const deleteProduct = async (id) => {
    let sql = "DELETE FROM productos WHERE id = ?";

    return await connection.query(sql,[id])
}

export default {
    selectAllMovies,
    selectMovieByID,
    insertNewMovie,
    updateMovie,
    deleteProduct
}