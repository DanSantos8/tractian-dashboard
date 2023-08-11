import { Card } from "antd"

export const CardsList = () => {
  const data = [
    {
      title: "Reports",
      description: "Check the assets informations",
    },
    {
      title: "Work orders",
      description: "Track the maintenance",
    },
    {
      title: "Users",
      description: "Manage your users activities",
    },

    {
      title: "Companies and Units",
      description: "Manage your clients",
    },
  ]
  return (
    <div className="flex gap-3 mx-auto">
      {data.map((item) => (
        <Card key={item.title}>
          <h4 className="font-semibold">{item.title}</h4>
          <span className="text-xs">{item.description}</span>
        </Card>
      ))}
    </div>
  )
}
