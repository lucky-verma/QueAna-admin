import axios from "axios";

export const serverAPI = (() =>
  axios.create({
    baseURL: VUE_APP_SERVER,
    headers: {
      "Content-Type": "application/json",
    },
  }))();
