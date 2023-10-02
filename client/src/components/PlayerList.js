import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import { ObjectId } from 'mongodb';

// import PlayerModal from "./PlayerModal";
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
  Button,
  // Stack,
  // Link,
} from "@chakra-ui/react";

const PlayerList = () => {
  const [players, setPlayers] = useState([]);
  // const [selectedPlayer, setSelectedPlayer] = useState(null); // Track the selected player
  // const [isModalOpen, setIsModalOpen] = useState(false); // Track whether the modal is open

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
          console.log("PlayerList res data: ", res.data);
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

  // const handlePlayerClick = (player) => {
  //   console.log('Player clicked:', player._id);
  // };

  const navigate = useNavigate(); 
  const handlePlayerClick = (player) => {
    navigate(`/player/${player._id}`);
  };

  return (
    <ChakraProvider>
      <Container>
        {/* <Link href='/'>Back to dashboard</Link> */}
        <Heading color="teal" paddingBottom="50px" align="center" size="md">
          Players
        </Heading>
        <Box overflowX="auto">
          <TableContainer>
            <Table size="sm">
              <Thead>
                <Tr>
                  <Th>Nickname</Th>
                  <Th>Email</Th>
                  <Th>Agent</Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody>
                {/* {console.log(players)}; */}
                {players.map((player) => {
                    // console.log('Mapping player:', player);
                  return (
                  <Tr key={player._id}>
                    <Td>{player.nickname}</Td>
                    <Td>{player.email}</Td>
                    <Td>{player.agent}</Td>
                    <Td><Button onClick={() => handlePlayerClick(player)}>View</Button>
                      {/* <Stack spacing={4} direction="row" align="center"> */}
                      {/* {console.log(player._id)} */}

                      {/* <Link to={`/player/${player._id}`} onClick={() => handlePlayerClick(player)}>View</Link> */}
                      {/* </Stack> */}
                    </Td>
                  </Tr>
                );
                  })}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Container>
    </ChakraProvider>
  );
};

export default PlayerList;
