import { Box, Button, Flex, Heading, Spacer } from "@chakra-ui/react"
import { useContext } from "react"
import { AppContext } from "../Context/AppContext"
import { useLocation, useNavigate } from "react-router-dom"
import { changeLocalStorage } from "../../services/storage"

export const Header = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AppContext)
  const navigate = useNavigate()
  const location = useLocation()

  const logout = () => {
    changeLocalStorage({ login: false })
    setIsLoggedIn(false)
    navigate('/')
  }

  const isUserPage = location.pathname.startsWith('/user')

  const handleAccountClick = () => {
    if (isUserPage) {
      navigate('/account/1')
    } else {
      navigate('/user')
    }
  }

  return (
    <Flex maxW="100vw" mx="auto" px={6} py={4}>
      <Box>
        <Heading as="h1" size="lg" color="#1DDFF4" fontWeight="bold" letterSpacing="wider">
          DIO Bank
        </Heading>
      </Box>
      {
        isLoggedIn && (
          <>
            <Spacer />
            <Button
              size="sm"
              variant="solid"
              backgroundColor="#FFFFFF"
              color="#000000"
              marginRight="3vw"
              onClick={() => handleAccountClick()}
            >
              {isUserPage ? 'Minha Conta' : 'Meus Dados'}
            </Button>
            <Button
              size="sm"
              variant="solid"
              backgroundColor="#FFFFFF"
              color="#000000"
              onClick={() => logout()}
            >
              Sair
            </Button>
          </>
        )
      }
    </Flex>
  )
}