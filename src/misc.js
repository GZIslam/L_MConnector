const POSCash = "17e551cd-ec11-11ee-0a80-077500094858";
const POSBank = "4dba4143-ec11-11ee-0a80-109800094618";
const POSScan = "f9c151c6-ec1b-11ee-0a80-0cce000d26d3";

const agentMap = {
    "SKAN PAY": POSScan,
    "Card": POSBank,
    "Cash": POSCash
}
const PORT = 80;
const requiredFields = (key) => ({
    "organization": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/923d6716-041b-11ee-0a80-0ead0002b95b",
        "type": "organization",
        "mediaType": "application/json"
      }
    },
    "agent": {
      "meta": {
        "href": `https://api.moysklad.ru/api/remap/1.2/entity/counterparty/${agentMap[key]}`,
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
});

const getProducts = (items, products) => {
    const res = items.map((item) => {
      const product = products.rows.find((p) => p.name === item.item_name);
      if (product) {
        return {
          quantity: item.quantity,
          price: item.total_money*10,
          assortment: {
            meta: product.meta
          },
        };
      }
    }).filter(el => el)
    return res;
};

module.exports = {getProducts, requiredFields, PORT}