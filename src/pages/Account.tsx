import { Center, SimpleGrid } from "@chakra-ui/react"
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

  return (
    <Center>
      <SimpleGrid columns={2} columnGap={8} paddingTop={16}>
        <CardInfo text="Informações de Acesso" />
        <CardInfo text="Informações da Conta" />
      </SimpleGrid>
    </Center>
  )
}