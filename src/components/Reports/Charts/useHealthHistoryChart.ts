import { useReportsContext } from "@/context/reports/ReportsContext"

export default function useHealthHistoryChart() {
  const { teste } = useReportsContext()
  return {
    teste,
  }
}
