import React, { useState } from 'react';
import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Input,
  Text,
} from '@chakra-ui/react';
import { useAuth } from '../contexts/AuthContext';

const Login = () => {
  const [username, setUsername] = useState('');
  const { login, error } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(username);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Center>
      <Box>
        <form onSubmit={handleSubmit}>
          <FormControl>
            <FormLabel>Username</FormLabel>
            <Input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </FormControl>
          <Button type="submit">Login</Button>
        </form>
        {error && (
          <Text color="red.500" mt="2">
            {error}
          </Text>
        )}
      </Box>
    </Center>
  );
};

export default Login;
