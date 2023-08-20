import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Card from '@mui/material/Card';

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      {/* <Container component="main" maxWidth="xs"> */}
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Card variant="outline" sx={{ width: "300px", height: "500px"}}>
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
          </Card>
        </Box>
        {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
      {/* </Container> */}
    </ThemeProvider>
  );
}

// import * as React from "react";
// import Box from "@mui/joy/Box";
// import Card from "@mui/joy/Card";
// import CardContent from "@mui/joy/CardContent";
// import Typography from "@mui/joy/Typography";
// import Button from "@mui/joy/Button";
// import Input from "@mui/joy/Input";
// import FormControl from "@mui/joy/FormControl";
// import FormLabel from "@mui/joy/FormLabel";
// import Checkbox from "@mui/joy/Checkbox";
// import Link from "@mui/joy/Link";

// const Login = () => {
//   return (
//     <Box
//       sx={{
//         display: "flex",
//         justifyContent: "center",
//       }}
//     >
//       <Card
//         variant="outlined"
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           minHeight: "50vh",
//           marginTop: 10,
//           px: 2,
//         }}
//       >
//         <CardContent
//           sx={{
//             my: "auto",
//             py: 2,
//             pb: 5,
//             display: "flex",
//             flexDirection: "column",
//             gap: 2,
//             width: 400,
//             maxWidth: "100%",
//             mx: "auto",
//             borderRadius: "sm",
//             "& form": {
//               display: "flex",
//               flexDirection: "column",
//               gap: 2,
//             },
//           }}
//         >
//           <Typography level="title-md">Login to your account</Typography>
//           <Typography>Welcome back</Typography>
//           <form
//             sx={{
//               display: "flex",
//               flexDirection: "column",
//               gap: 2,
//             }}
//             // onSubmit={(event: React.FormEvent<SignInFormElement>) => {
//             //   event.preventDefault();
//             //   const formElements = event.currentTarget.elements;
//             //   const data = {
//             //     email: formElements.email.value,
//             //     password: formElements.password.value,
//             //     persistent: formElements.persistent.checked,
//             //   };
//             //   alert(JSON.stringify(data, null, 2));
//             // }}
//           >
//             <FormControl required>
//               <FormLabel>Email</FormLabel>
//               <Input type="email" name="email" />
//             </FormControl>
//             <FormControl required>
//               <FormLabel>Password</FormLabel>
//               <Input type="password" name="password" />
//             </FormControl>
//             <Box
//               sx={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 alignItems: "center",
//               }}
//             >
//               <Checkbox
//                 size="sm"
//                 label="Remember for 30 days"
//                 name="persistent"
//               />
//             </Box>
//             <Button type="submit" fullWidth>
//               Sign in
//             </Button>
//             <Link fontSize="sm" href="#replace-with-a-link" fontWeight="lg">
//               Don't have account? Sign up{" "}
//             </Link>
//           </form>
//         </CardContent>
//       </Card>
//     </Box>
//   );
// };

// export default Login;
