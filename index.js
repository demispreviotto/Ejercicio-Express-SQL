const express = require("express");
const app = express();
const db = require("./config/database")

const PORT = 8080;

app.use(express.json())

app.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE expressDB';
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Database created...')
    })
})

app.get('/createtable/products', (req, res) => {
    let sql = 'CREATE TABLE products(id INT AUTO_INCREMENT,productName VARCHAR(50), productPrice INT, PRIMARY KEY(id))'
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Products table created...')
    })
})
app.get('/createtable/categories', (req, res) => {
    let sql = 'CREATE TABLE categories(id INT AUTO_INCREMENT,categoryName VARCHAR(50), categoryDescription VARCHAR(240), PRIMARY KEY(id))'
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Categories table created...')
    })
})

app.post('/products/create', (req, res) => {
    let sql = `INSERT INTO products(productName, productPrice) values('${req.body.productName}', '${req.body.productPrice}')`
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.status(201).send(`Product ${req.body.productName} added`)
    })
})
app.post('/categories/create', (req, res) => {
    let sql = `INSERT INTO categories(categoryName, categoryDescription) values('${req.body.categoryName}', '${req.body.categoryDescription}')`
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.status(201).send(`categorie ${req.body.categoryName} added`)
    })
})

app.listen(PORT, () => { console.log(`server on ${PORT}`) })