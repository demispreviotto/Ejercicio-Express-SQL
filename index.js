const express = require("express");
const app = express();
const db = require("./config/database")

const PORT = 8080;

app.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE expressDB';
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Database created...')
    })
})

app.listen(PORT, () => { console.log(`server on ${PORT}`) })