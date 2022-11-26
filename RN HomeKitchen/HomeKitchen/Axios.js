import axios from "axios";

const config = {
  baseUrl: "http://artycoders.pythonanywhere.com/",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
};

const base = async (param) => {
  console.log(config.baseUrl);
  console.log(param);
  const CancelToken = axios.CancelToken;
  let source = CancelToken.source();
  setTimeout(() => {
    source.cancel();
  }, 10000);
  return await axios({
    method: param.method,
    baseURL: config.baseUrl,
    url: param.url,
    headers: config.headers,
    cancelToken: source.token,
    data: param.data,
  })
    .then((res) => {
      return Promise.resolve(res);
    })
    .catch((err) => {
      if (err) {
        return Promise.reject(err);
      } else {
        return Promise.reject("TIMEOUT");
      }
    });
};

const request = async (method, url) => {
  return await base({ method, url })
    .then((res) => Promise.resolve(res))
    .catch(async (err) => {
      const response = err.response;
      let data = await response.data;
      console.warn(data);
      return Promise.reject(err);
    });
};

const requestData = async (method, url, data) => {
  return await base({ method, url, data })
    .then((res) => Promise.resolve(res))
    .catch((err) => {
      const response = err.response.data;
      // let data = await response;
      console.warn(response);
      return err.response;
    });
};

export default {
  request,
  requestData,
};
