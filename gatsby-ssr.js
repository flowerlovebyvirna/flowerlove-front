import "./src/css/main.css"
import "@fontsource/inter/variable.css"
import { GlobalLayout } from "./src/components/Layout/GlobalLayout"
import React from "react"

export const wrapPageElement = ({ element, props }) => {
  return <GlobalLayout {...props}>{element}</GlobalLayout>
}
