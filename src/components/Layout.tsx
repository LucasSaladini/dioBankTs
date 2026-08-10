import { Box } from "@chakra-ui/react"
import { Header } from "./Header/Header"

export const Layout = ({ children }: any) => {
  return (
    <Box minH="100vh" bg="#1A1828">
      <Header />
      {children}
    </Box>
  )
}