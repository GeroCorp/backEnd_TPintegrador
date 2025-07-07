import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();


export default {
    PORT: process.env.PORT || 3000,
    database: {
        host: process.env.DB_HOST,
        name: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD
    }    
}