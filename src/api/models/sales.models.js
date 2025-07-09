import connection from "../database/db.js";


const selectAllSales = async() => {
    let sql = "SELECT * FROM ventas";

    return await connection.query(sql);
}

const insertNewSale = async (cliente, monto, fecha) => {
    let sql = `INSERT INTO ventas (cliente, monto, fecha) VALUES (?, ?, ?)`;

    return await connection.query(sql, [cliente, monto, fecha]);
}

export default {
    selectAllSales,
    insertNewSale
}