import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import {
  ChakraProvider, 
  Button, 
  Flex,
  FormControl,
  FormLabel,
  Input,
  Stack,
  useColorModeValue,
  Card,
} from "@chakra-ui/react";


const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    const user = {
      username,
      email,
      password,
    };
    console.log(user);
    axios
      .post('http://localhost:5001/signup', user)
      .then((res) => {
        console.log(res.data);
        setUsername('');
        setEmail('');
        setPassword('');
        navigate('/login');
      });
  };

  return (
    <ChakraProvider>
      <Flex minH={'100vh'} align={'center'} justify={'center'} bg={useColorModeValue('gray.50', 'gray.800')}>
        <Card maxW='md' boxShadow="0px 0px 10px gray" >
          <Stack spacing={8} mx={'auto'} maxW={'lg'} minW={'sm'} py={6} px={6}>
            <Stack align={'center'}>
            </Stack>  
          <Stack spacing={4}>      
            <FormControl onSubmit={onSubmit}>
            <FormLabel>Username</FormLabel>
            <Input type="text" value={username} onChange={onChangeUsername} />
            <FormLabel>Email</FormLabel>
            <Input type="email" value={email} onChange={onChangeEmail} />
            <FormLabel>Password</FormLabel>
            <Input type="password" value={password} onChange={onChangePassword} />
            <Stack spacing={8}>
              <Button my={4} py={4} onClick={onSubmit} colorScheme='teal' type="submit">
                Sign up
              </Button>
            </Stack>
            </FormControl>   
          </Stack>
          </Stack>
        </Card>
      </Flex>
    </ChakraProvider>        
  );
};

export default Signup;
