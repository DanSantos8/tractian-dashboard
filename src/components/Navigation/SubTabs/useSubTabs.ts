import { asPathToSlug, createSlug, getSlug, getSubTabs } from "@/utils/helpers"
import { useRouter } from "next/router"
import { useCallback, useEffect, useMemo, useState } from "react"

export default function useSubTabs() {
  const { pathname, push, query, asPath } = useRouter()

  const [currentSubTab, setCurrentSubTab] = useState<number>(0)

  const subTabsValues = useMemo(() => {
    return getSubTabs(pathname)
  }, [pathname])

  const isSubTabActive = useMemo(() => {
    return !!query.subtab
  }, [query.subtab])

  const handleChangeSubTab = useCallback(
    (currentSubTab: string, index: number) => {
      setCurrentSubTab(index)
      const updatedUrl = `/${getSlug(pathname)}?subtab=${currentSubTab}`
      push(updatedUrl)
    },
    [pathname]
  )

  useEffect(() => {
    const subTabIndex = subTabsValues.findIndex(
      (subtab) => subtab.slug === asPathToSlug(asPath)
    )

    if (subTabIndex > 0) {
      handleChangeSubTab(
        createSlug(asPathToSlug(asPath) as string),
        subTabIndex
      )
    }

    if (!!subTabsValues.length && !isSubTabActive) {
      handleChangeSubTab(createSlug(subTabsValues[0].slug), 0)
    }
  }, [asPath, handleChangeSubTab, isSubTabActive, subTabsValues])

  return {
    subTabsValues,
    handleChangeSubTab,
    currentSubTab,
    setCurrentSubTab,
  }
}
