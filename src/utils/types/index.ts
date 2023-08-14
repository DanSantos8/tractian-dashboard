type ChecklistItem = {
  completed: boolean
  task: string
}

export interface WorkOrders {
  assetId: number
  assignedUserIds: number[]
  checklist: ChecklistItem[]
  description: string
  id: number
  priority: string
  status: string
  title: string
}

export interface Company {
  id: number
  name: string
}

export interface Unit {
  companyId: number
  id: number
  name: string
}

export interface User {
  companyId: number
  email: string
  id: number
  name: string
  unitId: number
}

interface HealthHistoryItem {
  status: string
  timestamp: string
}

interface Metrics {
  lastUptimeAt: string
  totalCollectsUptime: number
  totalUptime: number
}

interface Specifications {
  maxTemp: number
}

export interface Asset {
  assignedUserIds: number[]
  companyId: number
  healthHistory: HealthHistoryItem[]
  healthscore: number
  id: number
  image: string
  metrics: Metrics
  model: string
  name: string
  sensors: string[]
  specifications: Specifications
  status: string
  unitId: number
}
