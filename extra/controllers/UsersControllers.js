const db = require("../config/database.js");

const UsersController = {
    create(req, res) {
        let sql = `INSERT INTO users(user_name, user_email) values('${req.body.user_name}', '${req.body.user_email}');`
        db.query(sql, (err, result) => {
            if (err) throw err;
            console.log(result);
            res.status(201).send(`User ${req.body.user_name} created`)
        })
    },
    updateByName(req, res) {
        let sql = `UPDATE users SET user_name='${req.body.user_name}' 
                WHERE user_name = '${req.params.user_name}';`
        db.query(sql, (err, result) => {
            if (err) throw err;
            console.log(result);
            res.status(200).send(`User ${req.params.user_name} updated to ${req.body.user_name}`)
        })
    },
    showAll(req, res) {
        let sql = `SELECT * FROM users;`;
        db.query(sql, (err, result) => {
            if (err) throw err;
            res.status(200).send(result)
        })
    },
    selectUserByID(req, res) {
        let sql = `SELECT * FROM users WHERE id=${req.params.id};`;
        db.query(sql, (err, result) => {
            if (err) throw err;
            res.status(200).send(result)
        })
    },
    deleteByID(req, res) {
        let sql = `DELETE FROM users WHERE id=${req.params.id}`;
        db.query(sql, (err, result) => {
            if (err) throw err;
            res.status(200).send(`Deleted User with ID: ${req.params.id}`)
        })
    }
}

module.exports = UsersController;