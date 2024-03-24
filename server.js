const express = require("express");
const app = express();
const port = 5000;

const start = async () => {
    app.use(express.urlencoded({ extended: true }))
    app.use(express.json())

    app.post("/receipt", async (req, res) => {
        const data = JSON.parse(req.body);
        console.log("receipt", req.body, data);
        // res.send({ data: result })
    })

    app.listen(port)
    console.log("App listening in port: ", port)
}

start();