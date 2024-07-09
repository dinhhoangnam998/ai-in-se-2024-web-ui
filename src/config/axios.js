import axios from "axios";

export const axs = axios.create({
  baseURL: import.meta.env.VITE_APP_SERVER_URL,
});
