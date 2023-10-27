const express = require("express");
const CategoriesController = require("../controllers/CategoriesController");
const router = express.Router();

router.post('/categories/create', (req, res) => {
    let sql = `INSERT INTO categories(categoryName, categoryDescription) values('${req.body.categoryName}', '${req.body.categoryDescription}')`
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.status(201).send(`categorie ${req.body.categoryName} added`)
    })
})

router.put('/categories/categoryname/:id', (req, res) => {
    let sql = `UPDATE categories SET categoryName='${req.body.categoryName}' WHERE id = ${req.params.id}`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.status(200).send(`Category ${req.params.id} name updated to ${req.body.categoryName}`)
    })
})

router.get('/get/categories', (req, res) => {
    let sql = 'SELECT * FROM categories';
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.status(200).send(result);
    })
});

router.get('/categories/selectbyid/:id', (req, res) => {
    let sql = `SELECT * FROM categories WHERE id = ${req.params.id}`
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.status(200).send(result)
    })
})

module.exports = router;