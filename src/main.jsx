import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { AuthProvider } from './contexts/AuthContext';
import { TopicsProvider } from './contexts/TopicsContext';
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <AuthProvider>
        <TopicsProvider>
          <App />
        </TopicsProvider>
      </AuthProvider>
    </ChakraProvider>
  </React.StrictMode>
);
