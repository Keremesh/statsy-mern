import React, { useState, useEffect } from "react";
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
  Select,
} from "@chakra-ui/react";

const CreateStatsy = () => {
  const [amount, setAmount] = useState("");
  const [players, setPlayers] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState("");
  const [date_added, setDateAdded] = useState("");
  const [createdStatsy, setCreatedStatsy] = useState(null); 

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
        console.log("Player data:", res.data); 
        // const playersData = res.data.players.map((player) => player);
        // setPlayers(playersData);
        setPlayers(res.data.players);
      })
      .catch((error) => {
        console.error(error);
      });
    } else {
        console.error("No token found");
      }
  }, []);

  const onChangeAmount = (e) => {
    setAmount(e.target.value);
  };

  const onChangePlayer = (e) => {
    console.log('0- SelectedPlayer', e.target.value);
    setSelectedPlayer(e.target.value);
  };

  const onChangeDateAdded = (e) => {
    setDateAdded(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("1- Selected Player:", selectedPlayer); 
    const formattedDate = new Date(date_added).toLocaleDateString();
    const statsy = {
      amount,
      date_added: formattedDate,
      player: selectedPlayer,
      //   user_id,
    };
    console.log("2- Statsy so far:", statsy);
    const token = localStorage.getItem("token");
    if (token) {
      axios
        .post("http://localhost:5001/statsy/add", statsy, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          console.log("3- Response data: ", res.data);
          if (res.data.statsy) {
            setCreatedStatsy(res.data.statsy); 
            console.log("4- Created Statsy:", res.data.statsy);
          }
          setAmount("");
          setDateAdded("");
          setSelectedPlayer("");
          //   setUserId("");
          // const StatsyId = res.data.id;
          // navigate(`/Statsy/${StatsyId}`); 
        })
        .catch((error) => {
            if (error.response) {
                console.error("Response data (Error):", error.response.data);
            } else {
          console.log("An error occured:", error);
            }
        });
    } else {
      console.log("No token found");
    }
  };

  return (
    <ChakraProvider>
      <HStack spacing={6}>
        <Card mt={10} w="300px" variant="outline">
          <CardBody>
            <Heading color="teal" pb="30px" align="center" size="md">
              Add New Statsy
            </Heading>
            <form onSubmit={onSubmit}>
              <FormLabel color="teal">Amount</FormLabel>
              <Input
                type="number"
                mb="10px"
                value={amount}
                onChange={onChangeAmount}
              />
              <FormLabel color="teal">DateAdded</FormLabel>
              <Input
                type="date"
                mb="10px"
                value={date_added}
                onChange={onChangeDateAdded}
              />
              <FormLabel color="teal">Player</FormLabel>

              {/* <Input
                  mb="10px"
                  value={player_id}
                  onChange={onChangePlayerId}
                /> */}
              <Select
                mb="10px"
                value={selectedPlayer}
                onChange={onChangePlayer}
              >
                <option value="">Select a player</option>
                {players.map((player) => (
                  <option key={player._id} value={player.nickname}>
                    {player.nickname}
                  </option>
                ))}
              </Select>
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
        

        {createdStatsy && (
          <div>
            <Box justify="center" align="center">
              <Heading mb={3} size="md">
                Statsy created!
              </Heading>
              <Heading mb={3} size="sm">
                New statsy details:
              </Heading>
              <Table>
                <Tr>
                  <Th>Amount:</Th>
                  <Td>{createdStatsy.amount}</Td>
                </Tr>
                <Tr>
                  <Th>Date added:</Th>
                  <Td>{createdStatsy.date_added}</Td>
                </Tr>
                <Tr>
                  <Th>Player:</Th>
                  <Td>{createdStatsy.player}</Td>
                </Tr>
                {/* <Tr>
                    <Th>Created by user:</Th>
                    <Td>{createdStatsy.user_id}</Td>
                  </Tr> */}
              </Table>
            </Box>
          </div>
        )}
      </HStack>
    </ChakraProvider>
  );
};

export default CreateStatsy;
