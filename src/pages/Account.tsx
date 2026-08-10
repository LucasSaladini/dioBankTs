import { Center, SimpleGrid, Spinner } from "@chakra-ui/react"
import { CardInfo } from "../components/CardInfo/CardInfo"
import { api } from "../api";
import { useEffect, useState } from "react";

interface IUserData {
  email: string
  password: string
  name: string
  balance: number
}

export const Account = () => {
  const [userData, setUserData] = useState<null | IUserData>();

  useEffect(() => {
    const getData = async () => {
      const data: any | IUserData = await api()
      setUserData(data)
    }

    getData()
  }, [])

  const currentDate = new Date()

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