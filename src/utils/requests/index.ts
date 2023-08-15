import { TractianClient } from "../client"
import { Asset, Company, Unit, User, WorkOrders } from "../types"

export const unitsRequest = () =>
  TractianClient.get<Company[]>("/units/getUnits")

export const companiesRequest = () =>
  TractianClient.get<Unit[]>("/companies/getCompanies")

export const usersRequest = () => TractianClient.get<User[]>("/users/getUsers")

export const workOrdersRequest = () =>
  TractianClient.get<WorkOrders[]>("/workOrders/getWorkOrders")

export const assetsRequest = () =>
  TractianClient.get<Asset[]>("/assets/getAssets")

export const postWorkOrdersRequest = (body: WorkOrders) =>
  TractianClient.post<{ message: string }>("/workOrders/postWorkOrder", body)

export const updateWorkOrderRequest = (body: WorkOrders) =>
  TractianClient.put<{ message: string }>("/workOrders/updateWorkOrder", body)
