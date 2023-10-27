const mysql = require("mysql2")

const db = mysql.createConnection({
    host: 'localhost',
    user: "root",
    password: "enter password",
})
db.connect();

module.exports = db;