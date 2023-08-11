import { createSlug } from "@/utils/helpers"
import { getCurrentSubTabContent } from "@/utils/helpers/reports.helpers"
import { useRouter } from "next/router"

export default function BrowserReports() {
  const { query } = useRouter()

  const slug = query.subtab ?? ""

  return (
    <div className="flex h-full flex-col mx-auto">
      {getCurrentSubTabContent(createSlug(slug as string))}
    </div>
  )
}
