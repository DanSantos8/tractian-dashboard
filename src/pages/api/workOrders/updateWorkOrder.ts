import axios from "axios"
import { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL + "workorders"
    await axios.put(apiUrl, req.body)
    res.status(200).json({ message: "The work order was updated!" })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "Fail to update the work order" })
  }
}
