const db = require("../config/database.js");

const OrdersController = {
    create(req, res) {
        let sql = `INSERT INTO orders(order_description) values('${req.body.order_description}');`
        db.query(sql, (err, result) => {
            if (err) throw err;
            console.log(result);
            res.status(201).send(`Order ${req.body.order_description} created`)
        })
    },
    showAll(req, res) {
        let sql = `SELECT * FROM orders;`;
        db.query(sql, (err, result) => {
            if (err) throw err;
            res.status(200).send(result)
        })
    }
}

module.exports = OrdersController;