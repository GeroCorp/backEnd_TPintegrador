import connection from "../database/db.js";


const selectAllSales = async() => {
    let sql = "SELECT * FROM ventas";

    return await connection.query(sql);
}

const insertNewSale = async (cliente, monto) => {
    let sql = `INSERT INTO ventas (cliente, monto) VALUES (?, ?, ?)`;

    return await connection.query(sql, [cliente, monto]);
}

export default {
    selectAllSales,
    insertNewSale
}