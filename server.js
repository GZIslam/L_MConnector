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

app.post("/receipt", async (req, res) => {
    console.log("receipt", req);
    res.send({status: 200})
})

server.listen(port, () => {
    console.log(`App listening on ${port} port`);
});