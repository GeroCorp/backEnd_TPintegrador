// Import mysql module as a promise-based library to use async/await syntax in the DB connection
import mysql from 'mysql2/promise';

// Get the database configuration from environment variables
import env from '../config/enviroments.js';
const {database} = env;

// Create a connection pool to the MySQL database
const connection = mysql.createPool({
    host: database.host,
    database: database.name,
    user: database.user,
});

export default connection;