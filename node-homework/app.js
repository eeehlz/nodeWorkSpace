require("dotenv").config({ path: "./mapper/dbConfig.env" });

const express = require("express");
const app = express();
const empRouter = require("./router/employee_router.js");

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.listen(3000, () => {
    console.log("Server Start");
    console.log("http://localhost:3000");
});

app.get("/", (req, res) => {
    res.send("Welcome!!");
})

app.use("/", empRouter);