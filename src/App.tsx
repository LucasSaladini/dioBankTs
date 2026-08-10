import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Account } from "./pages/Account";
import { Home } from "./pages/Home";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { Layout } from "./components/Layout";

function App() {

  return (
    <BrowserRouter>
      <ChakraProvider value={defaultSystem}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/account' element={<Account />} />
          </Routes>
        </Layout>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;