import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import {
  ChakraProvider,
  Heading,
  Text,
  Container,
  Box,
  Button,
  FormLabel,
  Center,
  Input,
} from "@chakra-ui/react";

const PlayerDetail = () => {
  const { id } = useParams();
  const [player, setPlayer] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [updatedPlayer, setUpdatedPlayer] = useState({
    nickname: "",
    email: "",
    agent: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
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
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.log("No token found");
    }
  }, [id]);

  const handleEditClick = () => {
    setEditMode(true);
    setUpdatedPlayer({
      nickname: player.nickname,
      email: player.email,
      agent: player.agent,
    });
  };

  const handleDeleteClick = () => {
    if (window.confirm(`Are you sure you want to delete ${player.nickname}?`)) {
      axios
        .delete(`http://localhost:5001/player/${player._id}`)
        .then(() => {
          console.log("Player deleted successfully");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const handleUpdateClick = () => {
    const token = window.localStorage.getItem("token");
    if (token) {
    axios
      .put(`http://localhost:5001/player/${player._id}`, updatedPlayer, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        console.log("Player updated successfully");
        setUpdatedPlayer({ ...updatedPlayer, _id:res.data.player._id });
        navigate(`/player/${res.data.player._id}`);
        setEditMode(false);
      })
      .catch((error) => {
        console.log(error);
      });
    } else {
      console.log("No token found");
    }
  };

  const handleInputChange = (e) => {
    // Update the 'updatedPlayer' state as the user types in the input fields
    const { name, value } = e.target;
    setUpdatedPlayer((prevState) => ({
      ...prevState,
      [name]: value,
     }));
  };

  return (
    <>
      <ChakraProvider>
        <Container pt={"100px"}>
          {player && (
            <>
              <Heading>Player details</Heading>
              <Box marginTop="20px">
                {editMode ? (
                  <div>
                    <form>
                      <FormLabel color="teal">Nickname</FormLabel>
                      <Input
                        mb="10px"
                        name="nickname"
                        value={updatedPlayer.nickname}
                        onChange={handleInputChange}
                      />
                      <FormLabel color="teal">Email</FormLabel>
                      <Input
                        mb="10px"
                        name="email"
                        value={updatedPlayer.email}
                        onChange={handleInputChange}
                      />
                      <FormLabel color="teal">Agent</FormLabel>
                      <Input
                        mb="10px"
                        name="agent"
                        value={updatedPlayer.agent}
                        onChange={handleInputChange}
                      />
                      <Center>
                        <Button
                          mt="10px"
                          colorScheme="teal"
                          variant="outline"
                          onClick={handleUpdateClick}
                        >
                          Save
                        </Button>
                      </Center>
                    </form>
                  </div>
                ) : (
                  <div>
                    <Text>Nickname: {player.nickname}</Text>
                    <Text>Email: {player.email}</Text>
                    <Text>Agent: {player.agent}</Text>
                    <Button onClick={handleEditClick}>Update</Button>
                    <Button onClick={handleDeleteClick} colorScheme="red">
                      Delete
                    </Button>
                  </div>
                )}
              </Box>

              {/* Display the created player details */}
              {/* {createdPlayer && (
            <div>
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
            </div>
          )} */}
            </>
          )}
        </Container>
      </ChakraProvider>
    </>
  );
};

export default PlayerDetail;
