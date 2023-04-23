
import React from 'react';
import { Box } from '@chakra-ui/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <Router>
      <Box>
        <NavBar />
        <Routes />
      </Box>
    </Router>
  );
};

export default App;
