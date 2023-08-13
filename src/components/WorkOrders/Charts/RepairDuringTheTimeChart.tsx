import React from "react"
import Highcharts from "highcharts"
import HighchartsReact from "highcharts-react-official"

interface Task {
  completed: boolean
  task: string
}

interface Repair {
  assignedUserIds: number[]
  checklist: Task[]
}

interface DataItem {
  assetId: number
  assignedUserIds: number[]
  checklist: Task[]
}

const data: DataItem[] = [
  // ... (seus dados)
]

const getUsersFromData = (): number[] => {
  const users: number[] = []
  data.forEach((item) => {
    item.assignedUserIds.forEach((userId) => {
      if (!users.includes(userId)) {
        users.push(userId)
      }
    })
  })
  return users
}

const getTasksByUser = (): {
  userId: number
  completed: number
  incomplete: number
}[] => {
  const users = getUsersFromData()
  const tasksByUser: {
    [userId: number]: { completed: number; incomplete: number }
  } = {}

  users.forEach((userId) => {
    tasksByUser[userId] = {
      completed: 0,
      incomplete: 0,
    }
  })

  data.forEach((item) => {
    item.assignedUserIds.forEach((userId) => {
      item.checklist.forEach((task) => {
        if (task.completed) {
          tasksByUser[userId].completed++
        } else {
          tasksByUser[userId].incomplete++
        }
      })
    })
  })

  return users.map((userId) => ({
    userId,
    completed: tasksByUser[userId].completed,
    incomplete: tasksByUser[userId].incomplete,
  }))
}

const StackedBarChart: React.FC = () => {
  const users = getUsersFromData()
  const tasksByUser = getTasksByUser()

  const options: Highcharts.Options = {
    chart: {
      type: "bar",
    },
    title: {
      text: "Distribuição de Tarefas por Usuário",
    },
    xAxis: {
      categories: users.map((userId) => `Usuário ${userId}`),
    },
    yAxis: {
      min: 0,
      title: {
        text: "Número de Tarefas",
      },
    },
    legend: {
      reversed: true,
    },
    plotOptions: {
      series: {
        stacking: "normal",
      },
    },
    series: [
      {
        type: "line",
        name: "Concluídas",
        data: tasksByUser.map((user) => user.completed),
      },
      {
        type: "line",
        name: "Incompletas",
        data: tasksByUser.map((user) => user.incomplete),
      },
    ],
  }

  return <HighchartsReact highcharts={Highcharts} options={options} />
}

export default StackedBarChart
