import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import {
  ChakraProvider,
  Container,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Avatar,
  Heading,
  Icon,
  Tooltip,
} from "@chakra-ui/react";
import { FaUserPlus, FaUsers } from "react-icons/fa";
import { HiDocumentAdd, HiCollection } from "react-icons/hi";

const Dashboard = () => {
  return (
    <ChakraProvider>
      <NavBar></NavBar>
      <Container>
        <Avatar name="O K" size="md" src="duck.jpg" mb={6} />
        <Heading as="h2" size="xl" noOfLines={1} mb={6}>
          Hello, Duck Yeah
        </Heading>
        <Tabs isFitted variant="enclosed">
          <TabList mb="2em">
            <Tooltip label="View all statsies">
              <Tab>
                <Icon as={HiCollection} boxSize={8} />
              </Tab>
            </Tooltip>
            <Tooltip label="Add new statsy">
              <Tab>
                <Icon as={HiDocumentAdd} boxSize={8} />
              </Tab>
            </Tooltip>
            <Tooltip label="View all players">
              <Tab>
                <Icon as={FaUsers} boxSize={8} />
              </Tab>
            </Tooltip>
            <Tooltip label="Add new player">
              <Tab>
                <Link to="/player/add">
                  <Icon as={FaUserPlus} boxSize={8} />
                </Link>
              </Tab>
            </Tooltip>
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
      </Container>
    </ChakraProvider>
  );
};

export default Dashboard;
