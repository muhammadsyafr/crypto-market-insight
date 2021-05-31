import { moment } from "libraries";

export const getPath = (path = "") => (path ? `/${path}` : "");

export const createUrlParamFromObj = (params = null) => {
  if (!params) return "";
  const result = [];
  Object.keys(params).map((key) => result.push(`${key}=${params[key]}`));
  return `?${result.join("&")}`;
};

export const getCustomUrl = (url = "") => url;

export const getContentType = (type = "") => {
  switch (type) {
    case "form-data":
      return "multipart/form-data";
    default:
      return "application/json";
  }
};

export const createHeader = (value = {}, base = {}) => ({
  ...base,
  ...value,
});

export const handleAsync = async (promise) => {
  try {
    const response = await promise;
    return [response, undefined];
  } catch (err) {
    return [undefined, err];
  }
};

export const convertDate = (date) => {
  if (!date) return null;
  return moment(date).format("DD MMMM YYYY");
};

export const convertPrice = (str) => {
  return str.toString().replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1\.")
};

export const convertPercentage = (str) => {
  if (str == null) {
    return 0;
  }
  return str.toString().slice(0, 5)
};
