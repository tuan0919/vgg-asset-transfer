// composables/useApi.ts
import axios from "axios";

const config = useRuntimeConfig();

const api = axios.create({
  baseURL: config.public.apiBase as string,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Optional: Add interceptors here for auth tokens, logging, etc.

export default api;
