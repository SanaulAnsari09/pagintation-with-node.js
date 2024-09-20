const express = require("express");
const databaseConnection = require("./database");
const router = require("./routes/index");

databaseConnection();

const app = express();

app.use(express.json());

app.use('/api',router);

app.listen(8080);