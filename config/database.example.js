const mysql = require("mysql2")

const db = mysql.createConnection({
    host: 'localhost',
    user: "root",
    password: "enter password",
    database: "enter DB name"
})
db.connect();

module.exports = db;