import { BrowserRouter } from "react-router-dom";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { Layout } from "./components/Layout";
import { AppContextProvider } from "./components/Context/AppContext";
import { MainRoutes } from "./routes";
import { createLocalStorage, getAllLocalStorage } from "./services/storage";

function App() {
  if(!getAllLocalStorage()) {
    createLocalStorage();
  }

  return (
    <BrowserRouter>
      <AppContextProvider>
        <ChakraProvider value={defaultSystem}>
          <Layout>
            <MainRoutes />
          </Layout>
        </ChakraProvider>
      </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;