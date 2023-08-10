import { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL + "workorders"
    const response = await fetch(apiUrl)
    const data = await response.json()
    res.status(200).json(data)
  } catch (error) {
    console.error("Error fetching workorders:", error)
    res.status(500).json({ error: "Unable to fetch workorders" })
  }
}
