import axios, { InternalAxiosRequestConfig } from "axios";

import baseURL from "utils/base-url";

const instance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token: string | null = localStorage.getItem("token") || null;

  let headers = config.headers ?? {};

  if (token) headers.Authorization = `Bearer ${token}`;

  const newConfig: InternalAxiosRequestConfig = {
    ...config,
    headers,
  };

  return newConfig;
});

export const request = instance;

export default request;
