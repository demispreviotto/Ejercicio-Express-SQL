const express = require("express");
const app = express();

const PORT = 8080;

app.use(express.json());

app.use("/products", require("./routes/products.js"));
app.use("/categories", require("./routes/categories.js"))

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

app.get('/createtable/productscategories', (req, res) => {
    let sql = `CREATE TABLE productsCategories(
id INT AUTO_INCREMENT,
product_id INT,
category_id INT,
PRIMARY KEY(id),
FOREIGN KEY(product_id) REFERENCES products(id) ON DELETE CASCADE,
FOREIGN KEY(category_id) REFERENCES categories(id)
);`
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.status(200).send('ProductsCategories table created');
    })
})

app.post('/productcategories/link', (req, res) => {
    let sql = `INSERT INTO productsCategories(product_id,category_id) VALUES(1,1),(2,2);`
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.status(201).send('ProductsCategories table linked');
    })
})
app.get('/productcategories/show', (req, res) => {
    let sql = `SELECT productName, categoryName FROM productsCategories 
INNER JOIN products ON products.id = productsCategories.product_id
INNER JOIN categories ON categories.id = productsCategories.category_id;`
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.status(200).send(result);
    })
})

app.listen(PORT, () => { console.log(`server on ${PORT}`) })