import { 
  ChakraProvider, 
  defaultSystem,
  Box,
} from "@chakra-ui/react";
import { Header } from "./components/Header/Header";
import { Card } from "./components/Card";
import { login } from "./services/login";

function App() {

  return (
    <ChakraProvider value={defaultSystem}>
      <Box minH="100vh" bg="#1A1828">
        <Header />
        <Box p={4}>
          <Card login={login} />
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;