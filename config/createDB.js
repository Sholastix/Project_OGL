const mysql = require('mysql2/promise');

// Создание пустой БД.
const createDB = () => {
    const dbName = process.env.DB_SCHEMAS || 'cooking';

    mysql.createConnection({
        host: process.env.DB_HOST || '127.0.0.1',
        port: process.env.DB_PORT || '3306',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || '',
    })
        .then((connection) => {
            connection.query(`CREATE DATABASE IF NOT EXISTS ${dbName};`)
                .then(() => {
                    console.log('Database successfully created or already exist.');
                });
        });
};

module.exports = {
    createDB,
};
