import { createContext, useContext, useState } from "react"

const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [searchVal, setSearchVal] = useState("flower")
  const [page, setPage] = useState(1)
  const [totalPage, setTotalPage] = useState(0)
  const [isSearching, setIsSearching] = useState(false)

  return (
    <AppContext.Provider
      value={{
        searchVal,
        setSearchVal,
        page,
        setPage,
        totalPage,
        setTotalPage,
        isSearching,
        setIsSearching,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => useContext(AppContext)
