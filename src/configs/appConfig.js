const activeConfig = "dev";

const constants = {
  dev: {
    url: {
      api: "https://api.coingecko.com",
      assets: "",
      origin: ""
    }
  },

  production: {
    url: {
      api: "",
      assets: "",
      origin: ""
    }
  }
};

const appConfig = constants[activeConfig];

export default appConfig;
