import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import {
  ChakraProvider,
  Heading,
  Text,
  Container,
  Box,
} from "@chakra-ui/react";

const Player = () => {
  const { id } = useParams();
  const [player, setPlayer] = useState(null);
  // const [token, setToken] = useState(window.localStorage.getItem("token"));

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const response = await axios.get(`http://localhost:5001/player/${id}`, {
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
              },
            });
          setPlayer(response.data);
        } catch (error) {
          console.log(error);
        }
      } else {
        console.log("No token found");
      }
    };

    fetchData(); // Call the asynchronous fetchData function
  }, [id]);

  return (
    <>
      <ChakraProvider>
        <Container pt={"100px"}>
          {player && (
          <>
            <Heading>Player details</Heading>
            <Box marginTop="20px">
              <Text>Nickname: {player.nickname}</Text>
              <Text>Email: {player.email}</Text>
              <Text>Agent: {player.agent}</Text>
            </Box>
          </>
          )} 
        </Container>
      </ChakraProvider>
    </>
  );
};

export default Player;
