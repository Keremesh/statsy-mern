import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  ChakraProvider,
  Heading,
  Container,
  Table,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
  TableContainer,
  Box,
} from "@chakra-ui/react";

const PlayerList = () => {
  const [players, setPlayers] = useState([]);
  // const [token, setToken] = useState(
  // window.localStorage.getItem("token")
  // );

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token) {
      axios
        .get("http://localhost:5001/player", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          console.log("Response data: ", res.data);
          // const data = response.data;
          // window.localStorage.setItem("token", data.token);
          // setToken(window.localStorage.getItem("token"));
          setPlayers(res.data.players);
        })
        .catch((error) => {
          console.error("Error fetching players:", error);
        });
    } else {
      console.error("No token found");
    }
  }, []);

  return (
    <ChakraProvider>
      <Container>
        <Heading color="teal" paddingBottom="50px" align="center" size="md">
          Players
        </Heading>
        <Box overflowX="auto">
          <TableContainer>
          <Table>
            <Thead>
              <Tr>
                <Th>Nickname</Th>
                <Th>Email</Th>
                <Th>Agent</Th>
              </Tr>
            </Thead>
            <Tbody>
              {players.map((player) => (
                <Tr key={player._id}>
                  <Td>{player.nickname}</Td>
                  <Td>{player.email}</Td>
                  <Td>{player.agent}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>        
        </Box>
      </Container>
    </ChakraProvider>
  );
};

export default PlayerList;
