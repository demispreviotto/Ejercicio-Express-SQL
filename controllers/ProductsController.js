const db = require("../config/database.js");

const ProductsController = {
    create(req, res) {
        let sql = `INSERT INTO products(productName, productPrice) values('${req.body.productName}', '${req.body.productPrice}')`
        db.query(sql, (err, result) => {
            if (err) throw err;
            console.log(result);
            res.status(201).send(`Product ${req.body.productName} added`)
        })
    }

}

module.exports = ProductsController;