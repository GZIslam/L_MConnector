const express = require("express");
const app = express();
const port = 4000;

const start = async () => {
    app.use(express.urlencoded({ extended: true }))
    app.use(express.json())

    app.post("/receipt", async (req, res) => {
        // const data = JSON.parse(req.body);
        console.log("receipt", req.body);
        res.send("health_check")
    })

    app.get("/", async (req, res) => {
        res.send("test")
    })

    app.listen(port)
    console.log("App listening in port: ", port)
}

start();