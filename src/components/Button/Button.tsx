import { Button } from "@chakra-ui/react"
import React from "react"

interface IDioButton {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const DioButton = ({ onClick }: IDioButton) => {
  return (
    <Button
      onClick={onClick}
      bg="#6747B3"
      color="#1DDFF4"
      width="100%"
      marginTop="5px"
      _hover={{ bg: '#514477' }}
    >
      Entrar
    </Button>
  )
}