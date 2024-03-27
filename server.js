const express = require("express");
const app = express();
const port = 80;
const tokenMS = "62cc340ef77da416a2a0e930c67da502435adc86";

app.use(express.json());

app.post("/receipt", async (req, res) => {
    console.log("receipt", JSON.stringify(req.body, null, 5));
    res.send({status: 200})
})

app.get("/heartbeat", async (req, res) => {
    console.log("receipt", req);
    res.send("tuk tuk . . . tuk tuk")
})

app.listen(port, () => {
    console.log(`App listening on ${port} port`);
});