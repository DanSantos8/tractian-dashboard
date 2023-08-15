import { User } from "../types"

export function usersIdToUsersNameTransform(usersId: number[], users: User[]) {
  return usersId.map((userId) => ({
    value: userId,
    label: users.find((user) => user.id === userId)?.name || "",
  }))
}
