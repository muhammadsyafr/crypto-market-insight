import appConfig from "../appConfig";

export const config = appConfig;

const baseUrl = {
  coinmarket: {
    crypto: `${config.url.api}/api/v3/coins/markets?vs_currency=idr&order=market_cap_desc&per_page=50&page=1&sparkline=false&price_change_percentage=24h%2C7d`
  }
};

export default baseUrl;
