import { fetchAssetsService } from "@/services/fetchAssetsService"
import { useEffect } from "react"

export default function BrowserHome() {
  useEffect(() => {
    fetchAssetsService()
  }, [])
  return <div>Home</div>
}
