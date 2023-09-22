import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

import {
  ChakraProvider,
  Container,
  Button,
  Heading,
  Input,
  Card,
  CardBody,
  FormLabel,
  HStack,
  Center,
} from "@chakra-ui/react";

const CreatePlayer = () => {
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [agent, setAgent] = useState('');

  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangeAgent = (e) => {
    setAgent(e.target.value);
  };

  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    const player = {
      nickname,
      email, 
      agent,
    };
    console.log(player);
    const token = localStorage.getItem("token");
    if (token) {
      axios
        .post("http://localhost:5001/player/add", player, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          console.log(res.data);
          setNickname("");
          setEmail("");
          setAgent("");
          navigate("/player"); //this can be changed to navigate back to the 'feed' when I add that component
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.log("No token found");
    }
  };

  return (
    <>
      <ChakraProvider>
        <Container pt={"100px"}>
          <Card variant="outline">
            <CardBody>
              <Heading
                color="teal"
                paddingBottom="50px"
                align="center"
                size="md"
              >
                Add New Player
              </Heading>

              <form onSubmit={onSubmit}>
                <HStack>
                  <FormLabel color="teal">Nickname</FormLabel>
                  <Input
                    marginBottom="10px"
                    // placeholder="Nickname"
                    id="nickname"
                    type="text"
                    value={nickname}
                    onChange={onChangeNickname}
                  />
                </HStack>
                <HStack pt="6">
                  <FormLabel color="teal">Email</FormLabel>
                  <Input
                    marginBottom="10px"
                    // placeholder="Email"
                    id="email"
                    type="text"
                    value={email}
                    onChange={onChangeEmail}
                  />
                </HStack>
                <HStack pt="6">
                  <FormLabel color="teal">Agent</FormLabel>
                  <Input
                    marginBottom="10px"
                    // placeholder="Agent"
                    id="agent"
                    type="text"
                    value={agent}
                    onChange={onChangeAgent}
                  />
                </HStack>
                <Center>
                  <Button
                    marginTop="10px"
                    colorScheme="teal"
                    variant="outline"
                    onClick={onSubmit}
                  >
                    Submit
                  </Button>
                </Center>
              </form>
            </CardBody>
          </Card>
        </Container>
      </ChakraProvider>
    </>
  );
};

export default CreatePlayer;
