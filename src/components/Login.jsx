import React from 'react';
import { useForm } from 'react-hook-form';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  useToast,
} from '@chakra-ui/react';
import { useAuth } from '../contexts/AuthContext';
import apiClient from '../apiClient';

const Login = () => {
  const { register, handleSubmit } = useForm();
  const { login } = useAuth();
  const toast = useToast();

  const onSubmit = async (data) => {
    try {
      const response = await apiClient.post('/api/users/login', data);
      login(response.data);
      toast({
        title: 'Logged in',
        description: `Welcome, ${response.data.username}!`,
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: 'Login failed',
        description: 'Invalid username or password',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box>
      <VStack as="form" onSubmit={handleSubmit(onSubmit)} spacing={4} maxWidth="400px" mx="auto">
        <FormControl id="username" isRequired>
          <FormLabel>Username</FormLabel>
          <Input {...register('username')} />
        </FormControl>
        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <Input type="password" {...register('password')} />
        </FormControl>
        <Button type="submit" colorScheme="blue" mt={4}>
          Login
        </Button>
      </VStack>
    </Box>
  );
};

export default Login;
