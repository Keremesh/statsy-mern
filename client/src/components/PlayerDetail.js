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

const PlayerDetail = () => {
  const { id } = useParams();
  const [player, setPlayer] = useState(null);
  // const [token, setToken] = useState(window.localStorage.getItem("token"));

  useEffect(() => {
    // const fetchData = async () => {
    const token = localStorage.getItem("token");
    // let isMounted = true; // Flag to check if the component is still mounted

    if (token) {
      axios
        .get(`http://localhost:5001/player/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          // console.log("Response data: ", res.data);
          setPlayer(res.data.player);
          // if (isMounted) {
          //   setPlayer(res.data.player);
          // }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.log("No token found");
    }

    // return () => {
    //   isMounted = false;
    //   setPlayer(null);
    // };

    // fetchData(); // Call the asynchronous fetchData function
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

export default PlayerDetail;
