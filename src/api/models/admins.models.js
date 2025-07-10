import connection from "../database/db.js";

const selectAllAdmins = async() => {
    let sql = "SELECT * FROM admins";

    return await connection.query(sql);
}

export default {
    selectAllAdmins
}