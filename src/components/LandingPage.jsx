// components/LandingPage.jsx
import React from 'react';
import {
  Box,
  Heading,
  Text,
  Button,
  VStack,
  Image,
  Container,
} from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';

const LandingPage = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/articles');
  };

  return (
    <Box minHeight="calc(100vh - 4rem)" paddingTop="4rem">
      <Container maxW="container.xl" padding={4}>
        <VStack spacing={4} alignItems="center">
          <Image
            src="https://jdwd40.com/wp-content/uploads/2023/04/sabri-tuzcu-wunVFNvqhfE-unsplash.jpg"
            alt="Landing page illustration"
            width="100%"
            height="auto"
            borderRadius="md"
            boxShadow="xl"
            my={4}
          />
          <Heading>Welcome to My Project!</Heading>
          <Text>
            Discover interesting stories on various topics. Browse through the
            list of stories, select a topic, and dive into the details of each
            article.
          </Text>
          <Button colorScheme="teal" onClick={handleClick}>
            View Stories
          </Button>
        </VStack>
      </Container>
    </Box>
  );
};

export default LandingPage;
