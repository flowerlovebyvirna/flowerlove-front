import React, { createContext, useState, useMemo } from "react"

const SearchModalContext = createContext()

const SearchModalContextProvider = ({ children }) => {
  const [isSearchModalOpen, setIsSearchModalOpen] = useState()

  const initialValue = useMemo(() => {
    return {
      isSearchModalOpen,
      openSearchModal: () => {
        setIsSearchModalOpen(true)
      },
      closeSearchModal: () => {
        setIsSearchModalOpen(false)
      },
    }
  }, [isSearchModalOpen])
  return (
    <SearchModalContext.Provider value={initialValue}>
      {children}
    </SearchModalContext.Provider>
  )
}

export { SearchModalContext, SearchModalContextProvider }
