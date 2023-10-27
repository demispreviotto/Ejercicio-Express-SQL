const express = require("express");
const ProductsController = require("../controllers/ProductsController");
const router = express.Router();

router.post('/products/create', ProductsController.create)

router.put('/products/productname/:id', (req, res) => {
    let sql = `UPDATE products SET productName='${req.body.productName}' WHERE id = ${req.params.id}`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.status(200).send(`Product ${req.params.id} name updated to ${req.body.productName}`)
    })
})

router.get('/get/products', (req, res) => {
    let sql = `SELECT * FROM products`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.status(200).send(result)
    })
})

router.get('/products/selectbyid/:id', (req, res) => {
    let sql = `SELECT * FROM products WHERE id = ${req.params.id}`
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.status(200).send(result)
    })
})

router.get('/products/showdesc/', (req, res) => {
    let sql = 'SELECT * FROM products ORDER BY id DESC;'
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.status(200).send(result)
    })
})

router.get('/products/selectbyname/:name', (req, res) => {
    let sql = `SELECT * FROM products WHERE productName = "${req.params.name}"`
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.status(200).send(result)
    })
})

router.delete('/products/deletebyid/:id', (req, res) => {
    let sql = `DELETE FROM products WHERE id = ${req.params.id};`
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.status(200).send(result)
    })
})

module.exports = router;