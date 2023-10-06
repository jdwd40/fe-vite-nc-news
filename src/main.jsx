import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { AuthProvider } from './contexts/AuthContext';
import { TopicsProvider } from './contexts/TopicsContext';
import App from './App.jsx';
import "@fontsource/roboto-slab/400.css"; // Regular weight
import "@fontsource/roboto-slab/700.css"; // Bold weight
import "@fontsource/open-sans/400.css"; // Regular weight
import "@fontsource/open-sans/400-italic.css"; // Regular italic weight
import "@fontsource/open-sans/700.css"; // Bold weight


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
