import axios from "axios"

export const TractianClient = axios.create({
  //baseURL: process.env.API_URL
  baseURL: `${process.env.NEXT_PUBLIC_FACADE}`,
  responseType: "json",
  headers: {
    "Content-type": "application/json",
  },
})
