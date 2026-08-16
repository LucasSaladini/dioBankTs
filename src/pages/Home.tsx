import { Text, Box, Input, Stack, Heading } from "@chakra-ui/react";
import { Card } from "../components/Card/Card";
import { login } from "../services/login";
import { DioButton } from "../components/Button/Button";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../components/Context/AppContext";
import { changeLocalStorage } from "../services/storage";

export const Home = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { setIsLoggedIn } = useContext(AppContext);
  const navigate = useNavigate()

  const validateUser = async (email: string) => {
    const loggedIn = await login(email)

    if(!loggedIn) {
      alert("E-mail inválido")
      return
    }

    setIsLoggedIn(true)
    changeLocalStorage({ login: true })
    navigate('/account/1')
  }

  return (
    <Box minH="100vh" bg="#1A1828">
      <Box p={4}>
        <Card>
          <Heading as="h2" size="md" color="#1DDFF4" mb={6} textAlign="center">
            Faça o seu login
          </Heading>
          <Stack gap={4}>
            <Box>
              <Text color="#C6AEC9" mb={2} fontSize="sm" fontWeight="medium">
                Email
              </Text>
              <Input
                placeholder="email@dio.bank"
                bg="#514477"
                color="white"
                border="none"
                px={4}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                _placeholder={{ color: '#C6AEC9' }}
              />
            </Box>
            <Box>
              <Text color="#C6AEC9" mb={2} fontSize="sm" fontWeight="medium">
                Senha
              </Text>
              <Input
                type="password"
                placeholder="********"
                bg="#514477"
                color="white"
                border="none"
                px={4}
                _placeholder={{ color: '#C6AEC9' }}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Box>
            <DioButton onClick={() => validateUser(email)} />
          </Stack>
        </Card>
      </Box>
    </Box>
  )
}