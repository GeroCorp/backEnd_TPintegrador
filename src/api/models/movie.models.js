import connection from "../database/db.js";

const selectAllMovies = async() => {
    let sql = "SELECT * FROM peliculas";

    return await connection.query(sql);
}

const selectMovieByID = async(id) =>{
    let sql = `SELECT * FROM peliculas WHERE id = ?`

    return await connection.query(sql, id);
}

const insertNewMovie = async (titulo, categoria, duracion, sinopsis, imagen, tags, clasificacion, precio) => {
    const sql = `
        INSERT INTO peliculas 
        (titulo, categoria, duracion, sinopsis, imagen, tags, clasificacion, precio)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;

    return await connection.query(sql, [
        titulo,
        categoria,
        duracion,
        sinopsis,
        imagen,
        tags,
        clasificacion,
        precio
    ]);
};


const updateMovie = async (titulo, genero,  duracion, sinopsis, imagen, tags, clasificacion, precio,id) =>{
    let sql = `
        update peliculas
        set titulo = ?, categoria = ?, duracion = ?, sinopsis = ?, imagen = ?, tags = ?, clasificacion = ?, precio = ?
        where id = ?;
    `
    return await connection.query(sql, [titulo, genero,  duracion, sinopsis, imagen, tags, clasificacion, precio, id])

}

const deleteMovie = async (id) => {
    let sql = "DELETE FROM peliculas WHERE id = ?";

    return await connection.query(sql,[id])
}

export default {
    selectAllMovies,
    selectMovieByID,
    insertNewMovie,
    updateMovie,
    deleteMovie
}