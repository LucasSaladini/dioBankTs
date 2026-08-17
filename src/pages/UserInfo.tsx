import { Box, Center, SimpleGrid, Spinner, Text } from "@chakra-ui/react"
import { CardInfo } from "../components/CardInfo/CardInfo"
import { useContext, useEffect, useState } from "react"
import { AppContext } from "../components/Context/AppContext"
import { useNavigate } from "react-router-dom"
import { api } from "../api"

interface IUserData {
  email: string
  password: string
  name: string
  balance: number
  id: string
}

export const UserInfo = () => {
  const [userData, setUserData] = useState<null | IUserData>();
  
  const { isLoggedIn } = useContext(AppContext)
  const navigate = useNavigate();

  !isLoggedIn && navigate('/')

  useEffect(() => {
    const getData = async () => {
      const data: any | IUserData = await api()
      setUserData(data)
    }

    getData()
  }, [])

  return (
    <Center>
      <SimpleGrid columns={1} columnGap={8} paddingTop={16}>
        {
          userData === undefined || userData === null ?
            (
              <Center>
                <Spinner size="xl" color="white" />
              </Center>
            ) :
            (
              <>
                <CardInfo
                  mainContent={`Nome: ${userData?.name}`}
                  content={`E-mail: ${userData?.email}`} />
              </>
            )
        }
      </SimpleGrid>
    </Center>
  )
}