import { TractianClient } from "../client"

export const fetchAssetsRequest = () => {
  return TractianClient.get("/assets/getAssets")
}
