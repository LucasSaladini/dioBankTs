import { Box } from '@chakra-ui/react';

export const Card = ({ children }: any) => {

  return (
    <Box 
      p={8} 
      maxW="400px" 
      w="100%" 
      mx="auto" 
      mt={10}
    >
      { children }
    </Box>
  );
};