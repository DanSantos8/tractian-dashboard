import React, { createContext, useContext } from "react"

interface GridLines {
  gridLineWidth: number
  tickWidth: number
  lineWidth: number
}

interface ChartStyles {
  chart: {
    spacing: number[]
  }
  gridLines: GridLines
  labels: {
    style: {
      color: string
      fontSize: string
    }
  }
}

interface ChartsContextProps {
  styles: ChartStyles
}

const gridLines: GridLines = {
  gridLineWidth: 0,
  tickWidth: 0,
  lineWidth: 0,
}

const defaultChartStyles: ChartStyles = {
  chart: {
    spacing: [40, 24, 40, 24],
  },
  labels: {
    style: {
      color: "#333",
      fontSize: "12px",
    },
  },
  gridLines,
}

const ChartsContext = createContext<ChartsContextProps>({
  styles: defaultChartStyles,
})

export const ChartsContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <ChartsContext.Provider value={{ styles: defaultChartStyles }}>
      {children}
    </ChartsContext.Provider>
  )
}

export const useChartsContext = () => useContext(ChartsContext)
