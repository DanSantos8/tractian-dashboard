import * as Clients from "@/views/Browser/Clients/SubTabs"

enum ClientsSubTabsEnum {
  companies = "Companies",
  companies_slug = "companies",
  units = "Units",
  units_slug = "units",
}

export const clientsSubTabs = [
  {
    id: 0,
    title: ClientsSubTabsEnum.companies,
    slug: ClientsSubTabsEnum.companies_slug,
  },
  {
    id: 1,
    title: ClientsSubTabsEnum.units,
    slug: ClientsSubTabsEnum.units_slug,
  },
]

export function getClientsCurrentSubTabContent(slug: string) {
  switch (slug) {
    case ClientsSubTabsEnum.companies_slug:
      return <Clients.BrowserCompanies />
    case ClientsSubTabsEnum.units_slug:
      return <Clients.BrowserUnits />
  }
}
