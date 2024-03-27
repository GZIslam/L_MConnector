const express = require("express");
const app = express();
const fetch = require("fetch");
const port = 80;
const tokenMS = "62cc340ef77da416a2a0e930c67da502435adc86";

const POSCash = "17e551cd-ec11-11ee-0a80-077500094858";
const POSBank = "4dba4143-ec11-11ee-0a80-109800094618";

const reqFields = (agent) => ({
    "organization": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/923d6716-041b-11ee-0a80-0ead0002b95b",
        "type": "organization",
        "mediaType": "application/json"
      }
    },
    "agent": {
      "meta": {
        "href": `https://api.moysklad.ru/api/remap/1.2/entity/counterparty/${agent}`,
        "type": "counterparty",
        "mediaType": "application/json"
      }
    },
    "store": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/923f313c-041b-11ee-0a80-0ead0002b95d",
        "type": "store",
        "mediaType": "application/json"
      }
    }
})

const getProducts = async (list) => {
    const list = await fetch("https://api.moysklad.ru/api/remap/1.2/entity/product", { 
        headers: {
            "Authorization": `Bearer ${tokenMS}`
        }
    }).then(res => res.json());

    console.log("getProducts", list);
}

getProducts();

const mokki = {
  name: "888",
  organization: {
    meta: {
      href: "https://api.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e",
      type: "organization",
      mediaType: "application/json",
    },
  },
  agent: {
    meta: {
      href: "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/9794d400-f689-11e5-8a84-bae500000078",
      type: "counterparty",
      mediaType: "application/json",
    },
  },
  store: {
    meta: {
      href: "https://api.moysklad.ru/api/remap/1.2/entity/store/850ee995-f504-11e5-8a84-bae500000160",
      type: "store",
      mediaType: "application/json",
    },
  },
  code: "1243521",
  moment: "2016-04-19 13:50:24",
  applicable: false,
  vatEnabled: true,
  vatIncluded: true,
  positions: [
    {
      quantity: 10,
      price: 100.0,
      discount: 0,
      vat: 0,
      assortment: {
        meta: {
          href: "https://api.moysklad.ru/api/remap/1.2/entity/product/8b382799-f7d2-11e5-8a84-bae5000003a5",
          type: "product",
          mediaType: "application/json",
        },
      },
      trackingCodes: [
        {
          cis: "012345678912345672",
          type: "transportpack",
          trackingCodes: [
            {
              cis: "010463003759026521uHpIIf2111114",
              type: "trackingcode",
            },
            {
              cis: "010463003759026521uHpIIf2111111",
              type: "trackingcode",
            },
          ],
        },
      ],
      reserve: 10,
    },
    {
      quantity: 20,
      price: 200.0,
      discount: 0,
      vat: 21,
      assortment: {
        meta: {
          href: "https://api.moysklad.ru/api/remap/1.2/entity/product/be903062-f504-11e5-8a84-bae50000019a",
          type: "product",
          mediaType: "application/json",
        },
      },
      reserve: 20,
    },
    {
      quantity: 30,
      price: 300.0,
      discount: 0,
      vat: 7,
      assortment: {
        meta: {
          href: "https://api.moysklad.ru/api/remap/1.2/entity/service/c02e3a5c-007e-11e6-9464-e4de00000006",
          type: "service",
          mediaType: "application/json",
        },
      },
      pack: {
        id: "1bf22e62-8b47-11e8-56c0-000800000006",
      },
      reserve: 30,
      cost: 47,
    },
  ],
  overhead: {
    sum: 60,
    distribution: "price",
  },
};

app.use(express.json());

app.post("/receipt", async (req, res) => {
  console.log("receipt", JSON.stringify(req.body, null, 5));
  res.send({ status: 200 });
});

app.get("/heartbeat", async (req, res) => {
  console.log("receipt", req);
  res.send("tuk tuk . . . tuk tuk");
});

app.listen(port, () => {
  console.log(`App listening on ${port} port`);
});
