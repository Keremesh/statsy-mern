import React from "react";
import { ChakraProvider, Box, Icon, Spacer } from "@chakra-ui/react";
import { HiOutlineLogout } from "react-icons/hi";

const NavBar = () => {
  return (
    <ChakraProvider>
      <Box display='flex' bg="tomato" w="100%" p={4} mb={8} color="white" alignItems='flex-end'>
      <Spacer /><Icon as={HiOutlineLogout} boxSize={8} placement='right'/>
      </Box>
    </ChakraProvider>
  );
};

export default NavBar;
