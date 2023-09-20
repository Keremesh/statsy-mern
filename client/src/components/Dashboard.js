import React from "react";
// import { Link } from "react-router-dom";
import { ChakraProvider, Container, Button } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel, Avatar, AvatarBadge, AvatarGroup, Heading } from "@chakra-ui/react";

const Dashboard = () => {
  return (
    <ChakraProvider>
    <Container>
      <Avatar name="O K" size='md' src="duck.jpg"/>
      <Heading as='h2' size='3xl' noOfLines={1}>Hello, Duck Yeah</Heading>
      <Tabs>
        <TabList>
          <Tab>View statsies</Tab>
          <Tab>Add a statsy</Tab>
          <Tab>View players</Tab>
          <Tab>Add a player</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <p>Wow, all statsies!</p>
          </TabPanel>
          <TabPanel>
            <p>Wow, new statsy!</p>
          </TabPanel>
          <TabPanel>
            <p>Wow, all players!</p>
          </TabPanel>
          <TabPanel>
            <p>Wow, new player!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
      {/* <Button variant="outlined">View statsies</Button>
      <Button variant="outlined">Add a statsy</Button>
      <Button variant="outlined">View players</Button>
      <Button variant="outlined">Add a player</Button> */}
    </Container>
    </ChakraProvider>
  );
};

export default Dashboard;
