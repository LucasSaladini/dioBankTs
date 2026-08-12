import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Account } from "./pages/Account";
import { Home } from "./pages/Home";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { Layout } from "./components/Layout";
import { AppContextProvider } from "./components/Context/AppContext";

function App() {

  return (
    <BrowserRouter>
      <AppContextProvider>
        <ChakraProvider value={defaultSystem}>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path='/account/:id' element={<Account />} />
            </Routes>
          </Layout>
        </ChakraProvider>
      </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;