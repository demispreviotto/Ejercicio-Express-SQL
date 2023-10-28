const db = require("../config/database.js");

const ProductsController = {
    create(req, res) {
        let sql = `INSERT INTO products(productName, productPrice) values('${req.body.productName}', '${req.body.productPrice}')`
        db.query(sql, (err, result) => {
            if (err) throw err;
            console.log(result);
            res.status(201).send(`Product ${req.body.productName} added`)
        });
    },
    updateByID(req, res) {
        let sql = `UPDATE products SET productName='${req.body.productName}' WHERE id = ${req.params.id}`;
        db.query(sql, (err, result) => {
        if (err) throw err;
        res.status(200).send(`Product ${req.params.id} name updated to ${req.body.productName}`)
        });
    },
    getAll(req, res) {
        let sql = `SELECT * FROM products`;
        db.query(sql, (err, result) => {
        if (err) throw err;
        res.status(200).send(result)
        });
    },
    getByID(req, res) {
        let sql = `SELECT * FROM products WHERE id = ${req.params.id}`
        db.query(sql, (err, result) => {
        if (err) throw err;
        res.status(200).send(result)
        });
    },
    orderDesc(req, res) {
        let sql = 'SELECT * FROM products ORDER BY id DESC;'
        db.query(sql, (err, result) => {
        if (err) throw err;
        res.status(200).send(result)
        });
    },
    getByName(req, res) {
        let sql = `SELECT * FROM products WHERE productName = "${req.params.name}"`
        db.query(sql, (err, result) => {
        if (err) throw err;
        res.status(200).send(result)
        });
    },
    deleteByID(req, res) {
        let sql = `DELETE FROM products WHERE id = ${req.params.id};`
        db.query(sql, (err, result) => {
        if (err) throw err;
        res.status(200).send(result)
        });
    }
};

module.exports = ProductsController;