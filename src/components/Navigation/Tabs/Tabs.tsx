import { Card } from "antd"
import { SubTabs } from "../SubTabs/SubTabs"
import Link from "next/link"
import useTabs, { TabsEnum } from "./useTabs"
import useSubTabs from "../SubTabs/useSubTabs"

export const Tabs = () => {
  const { tabs, setCurrentTab, currentTab } = useTabs()
  const { setCurrentSubTab } = useSubTabs()

  return (
    <nav className="flex flex-col w-full gap-3 items-center">
      <div className="flex w-full overflow-x-auto flex-nowrap">
        <ul className="mx-auto flex gap-3">
          {tabs.map((tab, i) => (
            <li key={tab.title}>
              <Link
                href={tab.link}
                onClick={() => {
                  setCurrentSubTab(0)
                  setCurrentTab(i + 1)
                }}
              >
                <Card
                  className={` min-w-[250px] ${
                    currentTab === i + 1 ? "bg-blue text-gray-light" : ""
                  }`}
                >
                  <h4 className="font-semibold">{tab.title}</h4>
                  <span className="text-xs">{tab.description}</span>
                </Card>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <SubTabs />
    </nav>
  )
}
