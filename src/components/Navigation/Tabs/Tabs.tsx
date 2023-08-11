import { Card } from "antd"
import { SubTabs } from "../SubTabs/SubTabs"
import Link from "next/link"
import useTabs, { TabsEnum } from "./useTabs"

export const Tabs = () => {
  const { tabs, setCurrentTab, currentTab } = useTabs()

  return (
    <nav className="flex flex-col gap-3 mx-auto">
      <div className="flex gap-3 mx-auto">
        {tabs.map((tab, i) => (
          <Link
            key={tab.title}
            href={tab.link}
            onClick={() => setCurrentTab(i + 1)}
          >
            <Card
              className={`${
                currentTab === i + 1 ? "bg-blue text-gray-light" : ""
              }`}
            >
              <h4 className="font-semibold">{tab.title}</h4>
              <span className="text-xs">{tab.description}</span>
            </Card>
          </Link>
        ))}
      </div>
      <SubTabs />
    </nav>
  )
}
