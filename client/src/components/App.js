// import React from "react";
// import { Route, Router, useNavigate } from "react-router-dom";
// import Dashboard from "./Dashboard";

// const App = () => {
//   const navigate = useNavigate();

//   return (
//     <>
//     <h1>TF???</h1>
//       <Router>
//         <Route path="/dash" element={<Dashboard navigate={navigate} />} />
//       </Router> 
//     </> 
//   );
// }

// export default App;

import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";
import Signup from "./Signup";
// import { ChakraProvider } from '@chakra-ui/react'


const App = () => {
  return (
    // <ChakraProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/dash" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
    // </ChakraProvider>
  );
}

export default App;