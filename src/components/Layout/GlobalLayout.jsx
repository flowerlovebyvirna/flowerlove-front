import React from "react"
import { Box } from "@chakra-ui/react"
import { Navbar } from "./Navbar"
import { Footer } from "./Footer"
import { ChakraProvider } from "@chakra-ui/react"
import { theme } from "@chakra-ui/pro-theme"
import { extendTheme } from "@chakra-ui/react"
import { SearchModalContextProvider } from "../../context/searchModalContext"

export const GlobalLayout = ({ children }) => {
  const myTheme = extendTheme(
    {
      colors: { ...theme.colors, brand: theme.colors.pink },
    },
    theme
  )
  return (
    <SearchModalContextProvider>
      <ChakraProvider theme={myTheme}>
        <Box bg="bg-surface">
          <Navbar />
          {children}
          <Footer />
        </Box>
      </ChakraProvider>
    </SearchModalContextProvider>
  )
}
