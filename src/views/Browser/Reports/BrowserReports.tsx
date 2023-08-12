import { ReportsContextProvider } from "@/context/reports/ReportsContext"
import { createSlug } from "@/utils/helpers"
import { getCurrentSubTabContent } from "@/utils/helpers/reports.helpers"
import { useRouter } from "next/router"

export default function BrowserReports() {
  const { query } = useRouter()

  const slug = query.subtab ?? ""

  return (
    <ReportsContextProvider>
      <div className="flex h-full flex-col mx-auto">
        {getCurrentSubTabContent(createSlug(slug as string))}
      </div>
    </ReportsContextProvider>
  )
}
