import React from "react"
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"
import { Header } from "./components/Header"
import { Pricing } from "./components/Pricing"
import { Features } from "./components/Features"

export const App = () => (
  // make it responsive
  <ChakraProvider theme={theme}>
    <Header />
    <Pricing />
    <Features />
  </ChakraProvider>
)
