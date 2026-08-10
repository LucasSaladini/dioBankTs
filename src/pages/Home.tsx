import { Box } from "@chakra-ui/react";
import { Card } from "../components/Card/Card";
import { login } from "../services/login";

export const Home = () => {
  return (
    <Box minH="100vh" bg="#1A1828">
      <Box p={4}>
        <Card login={login} />
      </Box>
    </Box>
  )
}