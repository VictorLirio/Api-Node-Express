const mysql = require('mysql2/promise');

require('dotenv').config()

const connection = mysql.createPool({
    host: process.env.MYSQL_HOST || 'localhost',
    user: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQ_PASSWORD || 'root',
    database: process.env.MYSQL_DB || 'todolist'
})

module.exports = connection;