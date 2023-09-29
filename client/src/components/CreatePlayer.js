import React, { useState } from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";

import {
  ChakraProvider,
  Button,
  Heading,
  Input,
  Card,
  CardBody,
  FormLabel,
  Table,
  Th,
  Tr,
  Td,
  Center,
  Box,
  HStack,
  VStack,
  Link,
  Spacer,
} from "@chakra-ui/react";

const CreatePlayer = () => {
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [agent, setAgent] = useState("");
  const [createdPlayer, setCreatedPlayer] = useState(null); // State to store the created player details

  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangeAgent = (e) => {
    setAgent(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const player = {
      nickname,
      email,
      agent,
    };
    // console.log(player);
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
          console.log("Response data: ", res.data);
          if (res.data.player) {
            setCreatedPlayer(res.data.player); // Store the created player details in state
          }
          setNickname("");
          setEmail("");
          setAgent("");
          // const playerId = res.data.id;
          // navigate(`/player/${playerId}`); //this can be changed to navigate back to the 'feed' when I add that component
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
      {/* <Link href='/'>Back to dashboard</Link> */}
        <HStack spacing={6}>
          <Card mt={10} w="300px" variant="outline">
            <CardBody>
              <Heading color="teal" pb="30px" align="center" size="md">
                Add New Player
              </Heading>
              <form onSubmit={onSubmit}>
                <FormLabel color="teal">Nickname</FormLabel>
                <Input mb="10px" value={nickname} onChange={onChangeNickname} />
                <FormLabel color="teal">Email</FormLabel>
                <Input mb="10px" value={email} onChange={onChangeEmail} />
                <FormLabel color="teal">Agent</FormLabel>
                <Input mb="10px" value={agent} onChange={onChangeAgent} />
                <Center>
                  <Button
                    mt="10px"
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
          {/* <Spacer /> */}
          {/* Display the created player details */}
          {createdPlayer && (
            <div>
              {/* <VStack w="400px" spacing={4}> */}
              <Box justify="center" align="center">
                <Heading mb={3} size="md">
                  Player created!
                </Heading>
                <Heading mb={3} size="sm">
                  New player details:
                </Heading>
                <Table>
                  <Tr>
                    <Th>Nickname:</Th>
                    <Td>{createdPlayer.nickname}</Td>
                  </Tr>
                  <Tr>
                    <Th>Email:</Th>
                    <Td>{createdPlayer.email}</Td>
                  </Tr>
                  <Tr>
                    <Th>Agent:</Th>
                    <Td>{createdPlayer.agent}</Td>
                  </Tr>
                </Table>
              </Box>
              {/* </VStack> */}
            </div>
          )}
        </HStack>
      </ChakraProvider>
    </>
  );
};

export default CreatePlayer;
