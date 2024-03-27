const express = require("express");
const app = express();
const request = require("./src/request");
const products = (async () => await request("entity/product"))(); 
const {getProducts, reqFields, PORT} = require("./src/misc");

app.use(express.json());

app.post("/receipt", async (req, res) => {
  const receipt = req.body;
  const shipment = reqFields(receipt?.payments[0].name);
  shipment.positions = getProducts(receipt?.line_items, products);
  console.log("shipment", JSON.stringify(shipment, null, 5))
  res.send({ status: 200 });
});

app.get("/heartbeat", async (req, res) => {
  console.log("receipt", req);
  res.send("tuk tuk . . . tuk tuk");
});

app.listen(PORT, () => {
  console.log(`App listening on ${PORT} port`);
});
