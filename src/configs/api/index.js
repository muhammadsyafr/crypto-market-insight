import baseUrl from "./url";
import ApiRequest from "./config";

const API = {};

// coin
API.getCoin = ApiRequest.get(baseUrl.coinmarket.crypto);


export default API;
