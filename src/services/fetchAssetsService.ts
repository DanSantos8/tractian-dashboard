import { fetchAssetsRequest } from "@/utils/requests"

export async function fetchAssetsService() {
  try {
    const response = await fetchAssetsRequest()
    //console.log(response)
  } catch (e) {}
}
