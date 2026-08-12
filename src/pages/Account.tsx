import { Center, SimpleGrid, Spinner } from "@chakra-ui/react"
import { CardInfo } from "../components/CardInfo/CardInfo"
import { api } from "../api";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../components/Context/AppContext";

interface IUserData {
  email: string
  password: string
  name: string
  balance: number
  id: string
}

export const Account = () => {
  const [userData, setUserData] = useState<null | IUserData>();
  
  const { isLoggedIn } = useContext(AppContext)
  const { id } = useParams();
  const navigate = useNavigate();

  !isLoggedIn && navigate('/')

  useEffect(() => {
    const getData = async () => {
      const data: any | IUserData = await api()
      setUserData(data)
    }

    getData()
  }, [])

  const currentDate = new Date();

  if (userData && id !== userData.id) {
    navigate('/');
  }

  return (
    <Center>
      <SimpleGrid columns={2} columnGap={8} paddingTop={16}>
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
                  mainContent={`Olá, ${userData?.name}`}
                  content={`
                    ${currentDate.getDay()}/${currentDate.getMonth()}/${currentDate.getFullYear()} 
                    ${currentDate.getHours()}:${currentDate.getMinutes()}`} />
                <CardInfo mainContent="Saldo" content={`R$ ${userData.balance}`} />
              </>
            )
        }
      </SimpleGrid>
    </Center>
  )
}