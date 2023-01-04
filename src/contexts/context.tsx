import { createContext, ReactNode, useContext, useState } from "react"

interface DataContext {
  URL: string
  setURL: (url: string) => void
}

interface DataProviderProps {
  children: ReactNode
}

const DataContext = createContext({} as DataContext)

export function useData() {
  return useContext(DataContext)
}

export function DataProvider({ children }: DataProviderProps) {
  const [URL, setURL] = useState(
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=009009c2d668424eb81aa4f4bebc66be"
  )

  return (
    <DataContext.Provider value={{ URL, setURL }}>
      {children}
    </DataContext.Provider>
  )
}
