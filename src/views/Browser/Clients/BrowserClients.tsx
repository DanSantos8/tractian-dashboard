import { useGlobalContext } from "@/context/global/GlobalContext"
import { createSlug } from "@/utils/helpers"
import { getClientsCurrentSubTabContent } from "@/utils/helpers/clients.helpers"
import { useRouter } from "next/router"

export default function BrowserClients() {
  const { query } = useRouter()
  const context = useGlobalContext()

  const { state } = context!

  const slug = query.subtab ?? ""

  return (
    <div className="flex h-full flex-col mx-auto">
      {getClientsCurrentSubTabContent(createSlug(slug as string))}
    </div>
  )
}
