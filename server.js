const express = require("express");
const app = express();
const port = 80;

app.post("/receipt", async (req, res) => {
    console.log("receipt", req);
    res.send({status: 200})
})

app.get("/heartbeat", async (req, res) => {
    console.log("receipt", req);
    res.send("tuk tuk . . . tuk tuk")
})

app.listen(port, () => {
    console.log(`App listening on ${port} port`);
});