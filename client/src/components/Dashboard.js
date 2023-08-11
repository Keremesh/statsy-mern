import React from "react";
// import { Link } from "react-router-dom";
// import { ChakraProvider, Container, Heading, Button } from "@chakra-ui/react";

import { createTheme, ThemeProvider } from "@mui/material";

import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import { ExitToApp } from "@mui/icons-material";

const theme = createTheme({
  palette: {
    primary: {
      // light: "#aed581",
      main: "#00c9ff",
      dark: "#1859ec",
      contrastText: "#12213b",
    },
    secondary: {
      // light: "#ff7961",
      main: "#92fe9d",
      // dark: "#ba000d",
      // contrastText: "#000",
    },
  },
});

const buttonStyle = {
  margin: "10px",
  width: "150px",
  borderRadius: '8px',
  // border: "2px solid",
  // borderColor: theme.palette.primary.main,
  color: theme.palette.primary.dark,
  // position: "fixed",
};

const Dashboard = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container
        style={{
          maxWidth: "sm",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Card sx={{ width: "300px", height: "500px", background: 'linear-gradient(90deg, #00C9FF 0%, #92FE9D 100%)' }}> 
          <IconButton
            sx={{
              backgroundColor: theme.palette.secondary.main,
              color: theme.palette.secondary.contrastText,
              position: "absolute",
              top: "8px",
              right: "8px",
            }}
          >
            <ExitToApp />
          </IconButton>
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar alt="O" src="/broken-image.jpg" sx={{ marginBottom: '16px', width: 50, height: 50 }} />
            <Typography
              sx={{ fontSize: 14, 
                marginBottom: '20px' }}
              >
              Hello, name{" "}
            </Typography>
            {/* <CardActions>  */}
            <Button sx={buttonStyle} variant="outlined">View statsies</Button>
            <Button sx={buttonStyle} variant="outlined">Add a statsy</Button>
            <Button sx={buttonStyle} variant="outlined">View players</Button>
            <Button sx={buttonStyle} variant="outlined">Add a player</Button>
          </CardContent>
          {/* </CardActions> */}
        </Card>
      </Container>
    </ThemeProvider>
  );
};

export default Dashboard;
