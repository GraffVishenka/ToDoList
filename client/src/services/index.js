import axios from "axios";

import { API_URL } from "../utils/consts";

export const $api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

const authInterceptor = (config) => {
  config.headers.authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
};

$api.interceptors.request.use(authInterceptor);
