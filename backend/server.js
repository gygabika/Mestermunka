const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemon = require("nodemon");
const app = express();

app.use(cors());
app.use(bodyParser.json());
 
app.get("/", (rqs, res) => {
    res.send("Fut a backend!")
});
 
app.listen(3567, () => {
    console.log("A 3567 porton fut!")
});

const db = mysql.createConnection({
        user: "root",
        host: "localhost",
        port: 3307,
        password: "",
        database: "driveus"
});

