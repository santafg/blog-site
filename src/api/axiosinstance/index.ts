import axios, { AxiosError, AxiosResponse } from "axios";

const ApiReq = axios.create({
  baseURL: "https://api.twingly.com/blog/livefeed/api/v5/",
});

export const BackendApiReq = axios.create({
  baseURL: "/api/",
});

ApiReq.interceptors.request.use((config) => {
  return config;
});

ApiReq.interceptors.response.use(
  (res: AxiosResponse) => {
    console.log("res", res);
    return res;
  },
  async (error: AxiosError<any>) => {
    console.log("error", error);

    return Promise.reject(error);
  }
);

export default ApiReq;
