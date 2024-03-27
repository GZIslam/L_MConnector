const express = require("express");
const app = express();
const request = require("./src/request");
let products = undefined;
const {getProducts, requiredFields, PORT} = require("./src/misc");

app.use(express.json());

app.post("/receipt", async (req, res) => {
  if(!products) products = await request("entity/product"); 
  const receipts = req.body.receipts || [];
  for(let i = 0; i < receipts.length; i++) {
    const receipt = receipts[i];
    console.log("receipt", JSON.stringify(receipt, null, 5));
    const shipment = requiredFields(receipt.payments ? receipt.payments[0].name : "Cash");
    const positions = getProducts(receipt.line_items || [], products);
    console.log("positions", JSON.stringify(positions, null, 5));
    shipment.positions = positions;
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
