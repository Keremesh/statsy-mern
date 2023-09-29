import React from "react";
import { useNavigate } from "react-router-dom";
import { ChakraProvider, Box, IconButton, Spacer, Avatar, Heading } from "@chakra-ui/react";
import { HiOutlineLogout } from "react-icons/hi";

const NavBar = () => {
  const navigate = useNavigate();
  const handleLogOut = () => {
    navigate("/login");
  };

  return (
    <ChakraProvider>
      <Box
        display="flex"
        bg="tomato"
        w="100%"
        p={4}
        mb={8}
        color="white"
        alignItems="flex-end"
      >
        <Avatar name="O K" size="md" src="duck.jpg" />
        <Heading as="h3" size="md" mx={6}>
          Hello, Duck Yeah
        </Heading>
        <Spacer />{" "}
        <IconButton
          variant="outline"
          colorScheme="black"
          aria-label="Log out"
          as={HiOutlineLogout}
          boxSize={8}
          placement="right"
          onClick={handleLogOut}
          cursor="pointer"
        />
      </Box>
    </ChakraProvider>
  );
};

export default NavBar;
