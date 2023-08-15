import { createSlug } from "@/utils/helpers"
import { getUsersCurrentSubTabContent } from "@/utils/helpers/users.helpers"
import { useRouter } from "next/router"

export default function BrowserUsers() {
  const { query } = useRouter()

  const slug = query.subtab ?? ""

  return (
    <div className="flex h-full flex-col mx-auto">
      {getUsersCurrentSubTabContent(createSlug(slug as string))}
    </div>
  )
}
