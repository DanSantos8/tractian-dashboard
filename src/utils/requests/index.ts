import { Company, Unit } from "@/context/clients/ClientsContext"
import { TractianClient } from "../client"

export const unitsRequest = () =>
  TractianClient.get<Company[]>("/units/getUnits")

export const companiesRequest = () =>
  TractianClient.get<Unit[]>("/companies/getCompanies")
