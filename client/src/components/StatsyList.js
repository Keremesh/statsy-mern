import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
  Button,
  Link,
} from "@chakra-ui/react";

const StatsyList = () => {
  const [statsys, setStatsys] = useState([]);

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token) {
      axios
        .get("http://localhost:5001/statsy", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          console.log("StatsyList res data: ", res.data);
          //   const data = res.data;
          // window.localStorage.setItem("token", data.token);
          // setToken(window.localStorage.getItem("token"));
          setStatsys(res.data.statsys);
        })
        .catch((error) => {
          console.error("Error fetching statsy:", error);
        });
    } else {
      console.error("No token found");
    }
  }, []);

    const navigate = useNavigate();
    const handleStatsyClick = (statsy) => {
      navigate(`/statsy/${statsy._id}`);
    };

  return (
    <ChakraProvider>
      <Container>
        <Heading color="teal" paddingBottom="50px" align="center" size="md">
          Statsys
        </Heading>
        <Box overflowX="auto">
          <TableContainer>
            <Table size="sm">
              <Thead>
                <Tr>
                  <Th>Amount</Th>
                  <Th>Date added</Th>
                  <Th>Player</Th>
                  <Th>Created by</Th>
                </Tr>
              </Thead>
              {statsys.length > 0 ? (
                <Tbody>
                  {statsys.map((statsy) => (
                    //   console.log("Mapping Statsy:", statsy);
                    //   return (
                    <Tr key={statsy._id}>
                      <Td>{statsy.amount}</Td>
                      <Td>{statsy.date_added}</Td>
                    <Td>{statsy.player}</Td>
                    <Td>{statsy.createdBy}</Td>
                      <Td><Button onClick={() => handleStatsyClick(statsy)}>View</Button> 
                      {/* <Stack spacing={4} direction="row" align="center"> */}
                      {/* {console.log(player._id)} */}
                      {/* <Link to={`/player/${player._id}`} onClick={() => handlePlayerClick(player)}>View</Link> */}
                      {/* </Stack> */}
                      </Td> 
                    </Tr>
                  ))}
                </Tbody>
              ) : (
                <Tbody>
                  <Tr>
                    <Td>No Statsy data available</Td>
                  </Tr>
                </Tbody>
              )}
            </Table>
          </TableContainer>
        </Box>
      </Container>
    </ChakraProvider>
  );
};

export default StatsyList;
