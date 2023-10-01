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

const StatsyDetail = () => {
  const { id } = useParams();
  const [statsy, setStatsy] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [updatedStatsy, setUpdatedStatsy] = useState({
    amount: "",
    date_added: "",
    player: "",
    createdBy: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios
        .get(`http://localhost:5001/statsy/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          // console.log("Response data: ", res.data);
          setStatsy(res.data.statsy);
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
    setUpdatedStatsy({
      amount: statsy.amount,
      date_added: statsy.date_added,
      player: statsy.player,
      createdBy: statsy.createdBy,
    });
  };

  const handleDeleteClick = () => {
    const token = window.localStorage.getItem("token");
    if (token) {
      if (
        window.confirm(`Are you sure you want to delete ${statsy._id}?`)
      ) {
        axios
          .delete(`http://localhost:5001/statsy/${statsy._id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then(() => {
            console.log("Statsy deleted successfully");
            navigate("/statsy");
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
        .put(`http://localhost:5001/statsy/${statsy._id}`, updatedStatsy, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          console.log("Stasty updated successfully");
          setStatsy(res.data.statsy);
          // setUpdatedPlayer({ ...updatedPlayer, _id:res.data.player._id });
          // navigate(`/player/${res.data.player._id}`);
          window.alert("Statsy Updated!");
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
    setUpdatedStatsy((prevState) => ({
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
          {statsy && (       
              <Box borderWidth="1px" borderRadius="lg" p={4} marginTop="20px">
                <Heading size="md" mb={4}>
                  Statsy details
                </Heading>
                <Box>
              <Text fontWeight="bold">Amount:</Text>
              <Text>{statsy.amount}</Text>
            </Box>
            <Box mt={2}>
              <Text fontWeight="bold">Date added:</Text>
              <Text>{statsy.date_added}</Text>
            </Box>
            <Box mt={2}>
              <Text fontWeight="bold">Player:</Text>
              <Text>{statsy.player}</Text>
            </Box>
            <Box mt={2}>
              <Text fontWeight="bold">Created by:</Text>
              <Text>{statsy.createdBy}</Text>
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
                      <FormLabel color="teal">Amount</FormLabel>
                      <Input
                        mb="10px"
                        name="amount"
                        value={updatedStatsy.amount}
                        onChange={handleInputChange}
                      />
                      <FormLabel color="teal" mt={2}>Date added</FormLabel>
                      <Input
                        mb="10px"
                        name="date_added"
                        value={updatedStatsy.date_added}
                        onChange={handleInputChange}
                      />
                      <FormLabel color="teal" mt={2}>Player</FormLabel>
                      <Input
                        mb="10px"
                        name="player"
                        value={updatedStatsy.player}
                        onChange={handleInputChange}
                      />
                       {/* <FormLabel color="teal" mt={2}>Created by</FormLabel>
                      <Input
                        mb="10px"
                        name="createdBy"
                        value={updatedStatsy.createdBy}
                        onChange={handleInputChange}
                      /> */}
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

export default StatsyDetail;
