const express = require("express");
const request = require("./src/request");
const {getProducts, requiredFields, PORT} = require("./src/misc");

const app = express();
let products = undefined;

app.use(express.json());

app.post("/receipt", async (req, res) => {
  if(!products) products = await request("entity/product");
  const receipts = req.body.receipts || [];
  console.log("body", JSON.stringify(req.body, null, 5));
  //   console.log("products", JSON.stringify(products, null, 5));
  //   console.log("receipts", JSON.stringify(receipts, null, 5));
  for(let i = 0; i < receipts.length; i++) {
    const receipt = receipts[i];
    const shipment = requiredFields(receipt.payments ? receipt.payments[0].name : "Cash");
    const positions = getProducts(receipt.line_items || [], products);
    shipment.positions = positions;
    console.log("receipt", JSON.stringify(receipt, null, 5));
    console.log("positions", JSON.stringify(positions, null, 5));
    console.log("shipment", JSON.stringify(shipment, null, 5));
    if(positions.length) {
        await request("entity/demand", {
            method: "POST",
            body: JSON.stringify(shipment)
        })
    }
  }
  res.send({ status: 200 });
});

app.get("/heartbeat", async (req, res) => {
  console.log("receipt", req);
  res.send("tuk tuk . . . tuk tuk");
});

app.listen(PORT, () => {
  console.log(`App listening on ${PORT} port`);
});
