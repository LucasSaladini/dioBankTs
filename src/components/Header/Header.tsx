import { Box, Flex, Heading } from "@chakra-ui/react"

export const Header = () => {
  return (
    <Box bg="#1A1828" px={6} py={4} boxShadow="md">
      <Flex alignItems="center" justifyContent="center" maxW="100vw" mx="auto">
        <Heading as="h1" size="lg" color="#1DDFF4" fontWeight="bold" letterSpacing="wider">
          DIO Bank
        </Heading>
      </Flex>
    </Box>
  )
}