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
    const token = window.localStorage.getItem("token");
    if (token) {
      if (
        window.confirm(`Are you sure you want to delete ${player.nickname}?`)
      ) {
        axios
          .delete(`http://localhost:5001/player/${player._id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then(() => {
            console.log("Player deleted successfully");
            navigate("/player");
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        console.log("No token found");
      }
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
          setPlayer(res.data.player);
          // setUpdatedPlayer({ ...updatedPlayer, _id:res.data.player._id });
          // navigate(`/player/${res.data.player._id}`);
          window.alert("Player Updated!");
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
    const { name, value } = e.target;
    setUpdatedPlayer((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleReturnClick = () => {
    navigate("/");
  };

  return (
      <ChakraProvider>
        <Container maxW="xl" mt={5}>
          {player && (       
              <Box borderWidth="1px" borderRadius="lg" p={4} marginTop="20px">
                <Heading size="md" mb={4}>
                  Player details
                </Heading>
                <Box>
              <Text fontWeight="bold">Nickname:</Text>
              <Text>{player.nickname}</Text>
            </Box>
            <Box mt={2}>
              <Text fontWeight="bold">Email:</Text>
              <Text>{player.email}</Text>
            </Box>
            <Box mt={2}>
              <Text fontWeight="bold">Agent:</Text>
              <Text>{player.agent}</Text>
            </Box>
            <Button
              mt={4}
              onClick={handleEditClick}
              colorScheme="teal"
              size="sm"
            >
              Update
            </Button>
            <Button
              mt={4}
              onClick={handleDeleteClick}
              colorScheme="red"
              size="sm"
            >
              Delete
            </Button>
            <Button
              mt={4}
              onClick={handleReturnClick}
              colorScheme="teal"
              size="sm"
            >
              Return to dashboard
            </Button>
                  {/* <Text >Nickname: {player.nickname}</Text>
                  <Text>Email: {player.email}</Text>
                  <Text>Agent: {player.agent}</Text>
                  <Button onClick={handleEditClick}>Update</Button>
                  <Button onClick={handleDeleteClick} colorScheme="red">
                    Delete
                  </Button>
                  <Button onClick={handleReturnClick} colorScheme="teal">
                    Return to list
                  </Button> */}
                {editMode && (
                  <Box mt={4}>
                    <form>
                      <FormLabel color="teal">Nickname</FormLabel>
                      <Input
                        mb="10px"
                        name="nickname"
                        value={updatedPlayer.nickname}
                        onChange={handleInputChange}
                      />
                      <FormLabel color="teal" mt={2}>Email</FormLabel>
                      <Input
                        mb="10px"
                        name="email"
                        value={updatedPlayer.email}
                        onChange={handleInputChange}
                      />
                      <FormLabel color="teal" mt={2}>Agent</FormLabel>
                      <Input
                        mb="10px"
                        name="agent"
                        value={updatedPlayer.agent}
                        onChange={handleInputChange}
                      />
                      <Center mt={4}>
                        <Button
                          colorScheme="teal"
                          variant="outline"
                          onClick={handleUpdateClick}
                          size="sm"
                        >
                          Save
                        </Button>
                      </Center>
                    </form>
                  </Box>
                )}
              </Box>
          )}
        </Container>
      </ChakraProvider>
  );
};

export default PlayerDetail;
