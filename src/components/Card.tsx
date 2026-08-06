import { useState } from 'react';
import { Box, Heading, Input, Stack, Text } from '@chakra-ui/react';
import { DioButton } from './Button/Button';

interface ICard {
  login: (email: string) => void;
}

export const Card = ({ login }: ICard) => {
  const [email, setEmail] = useState('');

  return (
    <Box 
      bg="#1A1828" 
      p={8} 
      borderRadius="lg" 
      boxShadow="lg" 
      maxW="400px" 
      w="100%" 
      mx="auto" 
      mt={10}
    >
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
          />
        </Box>
        <DioButton onClick={() => login(email)} />
      </Stack>
    </Box>
  );
};