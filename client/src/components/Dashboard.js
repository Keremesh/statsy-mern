import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import PlayerList from "./PlayerList";
import CreatePlayer from "./CreatePlayer";

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
        {/* <Avatar name="O K" size="md" src="duck.jpg" mb={6} />
        <Heading as="h2" size="xl" noOfLines={1} mb={6}>
          Hello, Duck Yeah
        </Heading> */}
        <Tabs variant="enclosed" size='lg'> 
        {/* orientation="vertical"  */}
          <TabList>
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
              {/* <Link to="/player"> */}
                <Icon as={FaUsers} boxSize={8} />
              {/* </Link> */}
              </Tab>
            </Tooltip>
            <Tooltip label="Add new player">
              <Tab>
                {/* <Link to="/player/add"> */}
                  <Icon as={FaUserPlus} boxSize={8} />
                {/* </Link> */}
              </Tab>
            </Tooltip>
          </TabList>
          <TabPanels >
            <TabPanel >
              <p>Wow, all statsies!</p>
            </TabPanel>
            <TabPanel>
              <p>Wow, new statsy!</p>
            </TabPanel>
            <TabPanel>
              <PlayerList />
            </TabPanel>
            <TabPanel>
              <CreatePlayer />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </ChakraProvider>
  );
};

export default Dashboard;
