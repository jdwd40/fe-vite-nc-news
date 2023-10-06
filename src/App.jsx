
import React from 'react';
import { Box } from '@chakra-ui/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import NavBar from './components/NavBar';
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";

const App = () => {
  return (
    <ChakraProvider theme={theme}>
    <Router>
      <Box>
        <NavBar />
        <Routes />
      </Box>
    </Router>
    </ ChakraProvider>
  );
};

export default App;
