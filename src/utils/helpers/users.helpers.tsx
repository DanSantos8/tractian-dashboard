import * as Users from "@/views/Browser/Users/SubTabs"

enum UsersSubTabsEnum {
  users = "Users",
  users_slug = "users",
  assignments = "Assignments",
  assignments_slug = "assignments",
}

export const UsersSubTabs = [
  {
    id: 0,
    title: UsersSubTabsEnum.users,
    slug: UsersSubTabsEnum.users_slug,
  },
]

export function getUsersCurrentSubTabContent(slug: string) {
  switch (slug) {
    case UsersSubTabsEnum.users_slug:
      return <Users.BrowserUsersList />
  }
}
