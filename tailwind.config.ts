import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "blue-dark": "#0055A5",
      blue: "#007AFF",
      "blue-light": "#3498DB",
      black: "#333333",
      "gray-dark": "#333333",
      gray: "#666666",
      "gray-light": "#f5f5f5",
      red: "#FF0000",
      green: "#07BC0C",
    },
  },
  plugins: [],
}
export default config
