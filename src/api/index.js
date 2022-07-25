import axios from "axios";

export const serverAPI = (() =>
  axios.create({
    baseURL: process.env.SERVER,
    headers: {
      "Content-Type": "application/json",
    },
  }))();
