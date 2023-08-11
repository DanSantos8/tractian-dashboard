import { TractianClient } from "../client"

export const fetchAssetsRequest = () => {
  return TractianClient.post("/assets/getAssets")
}
