import React from 'react';
import { Box } from '@chakra-ui/react';
import Routes from './routes';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <Box>
      <NavBar />
      <Routes />
    </Box>
  );
};

export default App;
