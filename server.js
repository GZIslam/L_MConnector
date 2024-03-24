const express = require("express");
const app = express();
const https = require("https");
const fs = require("fs");
const path = require("path");
const port = 443;

const options = {
    key: fs.readFileSync(path.join(__dirname, "localhost-key.pem")),
    cert: fs.readFileSync(path.join(__dirname, "localhost.pem")),
};

const server = https.createServer(options, app);

server.listen(port, () => {
    console.log(`App listening on https://localhost:${port}`);
});

server.post("/test", async (req, res) => {
    res.send("test")
})

// const start = async () => {
//     app.use(express.urlencoded({ extended: true }))
//     app.use(express.json())

//     app.post("/receipt", async (req, res) => {
//         // const data = JSON.parse(req.body);
//         console.log("receipt", req.body);
//         res.send("health_check")
//     })

//     app.post("/", async (req, res) => {
//         res.send("test")
//     })

//     app.listen(port)
//     console.log("App listening in port: ", port)
// }

// start();