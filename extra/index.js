const express = require("express");
const app = express();
const PORT = 8080;
const db = require("./config/database")

app.use(express.json());

app.use("/", require("./routes/users.js"));
app.use("/", require("./routes/orders.js"))

app.get('/createDB', (req, res) => {
    let sql = `CREATE DATABASE expressDB_users;`
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.status(200).send('Database created')
    })
})

app.get('/createTable/users', (req, res) => {
    let sql = `CREATE TABLE users (id INT AUTO_INCREMENT, user_name VARCHAR(50), user_email VARCHAR(50), PRIMARY KEY(id));`
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.status(200).send('Users Table created')
    })
})
app.get('/createTable/orders', (req, res) => {
    let sql = `CREATE TABLE orders (id INT AUTO_INCREMENT, order_description VARCHAR(50), PRIMARY KEY(id));`
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.status(200).send('Orders Table created')
    })
})

app.get('/crateTable/users_orders', (req, res) => {
    let sql = `CREATE TABLE users_orders(id INT AUTO_INCREMENT, 
        user_id INT, order_id INT, 
        PRIMARY KEY(id), 
        FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE, 
        FOREIGN KEY(order_id) REFERENCES orders(id));`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.status(201).send(result)
    })
})

app.get('/crateTable/users_orders/linktables', (req, res) => {
    let sql = `INSERT INTO users_orders(user_id, order_id) VALUES(1,1),(2,2);`
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.status(200).send(result)
    })
})

app.get('/users_orders/show', (req, res) => {
    let sql = `SELECT user_name, order_description FROM users_orders 
    INNER JOIN users ON users.id = users_orders.user_id
    INNER JOIN orders ON orders.id = users_orders.order_id;`
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.status(200).send(result)
    })
})

app.listen(PORT, () => console.log(`Start at ${PORT}`))
