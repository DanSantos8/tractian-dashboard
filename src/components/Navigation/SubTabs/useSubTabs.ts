import { createSlug, getSubTabs } from "@/utils/helpers"
import { useRouter } from "next/router"
import { useCallback, useEffect, useMemo, useState } from "react"

export default function useSubTabs() {
  const { pathname, push, query } = useRouter()
  const [currentSubTab, setCurrentSubTab] = useState<number>(0)

  const isSubTabActive = !!query.subtab

  const subTabsValues = useMemo(() => {
    return getSubTabs(pathname)
  }, [pathname])

  const handleChangeSubTab = useCallback(
    (currentSubTab: string, index: number) => {
      setCurrentSubTab(index)
      const updatedUrl = `/reports?subtab=${currentSubTab}`
      push(updatedUrl)
    },
    []
  )

  useEffect(() => {
    if (!!subTabsValues.length && !isSubTabActive) {
      handleChangeSubTab(createSlug(subTabsValues[0].slug), 0)
    }
  }, [handleChangeSubTab, isSubTabActive, subTabsValues])
  return {
    subTabsValues,
    handleChangeSubTab,
    currentSubTab,
  }
}
