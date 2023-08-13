import { createSlug } from "@/utils/helpers"
import { getWorkOrderCurrentSubTabContent } from "@/utils/helpers/work-orders.helpers"
import { useRouter } from "next/router"
export default function BrowserWorkOrders() {
  const { query } = useRouter()

  const slug = query.subtab ?? ""

  return (
    <div className="flex h-full gap-3 flex-col mx-auto ">
      {getWorkOrderCurrentSubTabContent(createSlug(slug as string))}
    </div>
  )
}
