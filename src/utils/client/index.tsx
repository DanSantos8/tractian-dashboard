import axios from "axios"

export const TractianClient = axios.create({
  //baseURL: process.env.API_URL
  baseURL: `${process.env.NEXT_PUBLIC_LOCALHOST_URL}`,
  responseType: "json",
  headers: {
    "Content-type": "application/json",
  },
})
