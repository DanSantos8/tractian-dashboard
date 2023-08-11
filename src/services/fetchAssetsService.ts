import { fetchAssetsRequest } from "@/utils/requests"

export async function fetchAssetsService() {
  try {
    const response = await fetchAssetsRequest()
  } catch (e) {
    console.log(e)
  }
}
