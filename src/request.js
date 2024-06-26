const fetch = require("node-fetch");
const tokenMS = "62cc340ef77da416a2a0e930c67da502435adc86";

const request = async (url, params) => {
    return await fetch("https://api.moysklad.ru/api/remap/1.2/" + url, {
        headers: {
            "Authorization": "Bearer " + tokenMS,
            "Content-type": "Application/json"
        },
        ...params
    }).then(res => res.json());
}

module.exports = request;