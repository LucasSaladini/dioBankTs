import { Box, Flex, Heading } from "@chakra-ui/react"
import { useContext } from "react"
import { AppContext } from "../Context/AppContext"

export const Header = () => {
  const context = useContext(AppContext)

  return (
    <Box px={6} py={4}>
      <Flex alignItems="center" justifyContent="center" maxW="100vw" mx="auto">
        <Heading as="h1" size="lg" color="#1DDFF4" fontWeight="bold" letterSpacing="wider">
          DIO Bank
        </Heading>
      </Flex>
    </Box>
  )
}