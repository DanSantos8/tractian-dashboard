import { fetchAssetsRequest } from "@/utils/requests"

export async function fetchAssetsService() {
  try {
    const response = await fetchAssetsRequest()
    console.log(JSON.stringify(response))
  } catch (e) {
    console.log(e)
  }
}
