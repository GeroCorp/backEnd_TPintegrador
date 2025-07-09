//////////////////////
// Peticiones SQL  //

import connection from "../database/db.js"; // Importamos la conexion a la BBDD


//////////////////////////////////////
// Seleccionar todos los productos //
const selectAllCollectibles = async() => {
    let sql = `SELECT * FROM coleccionables`;
    
    // Al usar [rows] la desestructuracion extrae directamente las filas (que es el primer elemento del resultado de la consulta), 
    // nos sirve porque hace el codigo mas legible y explicito
    return await connection.query(sql);
}



/////////////////////////////////////
// Seleccionar producto por su id //
const selectCollectibleFromId = async (id) => {
    // Consulta no optima, porque permite la inyeccion SQL
    // let sql = `SELECT * FROM products where id = ${id}`;
    let sql = `SELECT * FROM coleccionables where id = ?`;

    return await connection.query(sql, [id]);
}



///////////////////////////
// Crear nuevo producto //
const insertNewCollectible = async (name, image, desc, price) => {
    let sql = `INSERT INTO coleccionables (nombre, imagen, descripcion, precio) VALUES (?, ?, ?, ?)`;

    return await connection.query(sql, [name, image, desc, price]);
}



//////////////////////////
// Actualizar producto //
const updateCollectible = async (name, image, desc, price, id) => {
    let sql = `
            UPDATE coleccionables
            SET nombre = ?, imagen = ?, descripcion = ?, precio = ?
            WHERE id = ?
        `;

    return await connection.query(sql, [name, image, desc, price, id]);
}



////////////////////////
// Eliminar producto //
const deleteCollectible = async (id) => {
    let sql = "DELETE FROM coleccionables WHERE id = ?";

    return await connection.query(sql, [id]);
}


export default {
    selectAllCollectibles,
    selectCollectibleFromId,
    insertNewCollectible,
    updateCollectible,
    deleteCollectible
}