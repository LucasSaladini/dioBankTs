import { 
  ChakraProvider, 
  defaultSystem,
  Box,
} from "@chakra-ui/react";
import { Header } from "./components/Header/Header";
import { Card } from "./components/Card";

function App() {
  const handleLogin = (email: string) => {
    alert(`Boas-vindas ao DIO Bank, ${email}!`);
  };

  return (
    <ChakraProvider value={defaultSystem}>
      <Box minH="100vh" bg="#1A1828">
        <Header />
        <Box p={4}>
          <Card login={handleLogin} />
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;