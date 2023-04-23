import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Box,
  VStack,
  Heading,
  Text,
  Divider,
  Button,
  HStack,
} from '@chakra-ui/react';
import apiClient from '../apiClient';

const Article = () => {
  const [article, setArticle] = useState(null);
  const { article_id } = useParams();

  useEffect(() => {
    const fetchArticle = async () => {
      const response = await apiClient.get(`/articles/${article_id}`);
      setArticle(response.data.article);
    };
    fetchArticle();
  }, [article_id]);

  if (!article) {
    return <Text>Loading...</Text>;
  }

  return (
    <VStack spacing={4} align="stretch">
      <Box p="5" shadow="md" borderWidth="1px">
        <Heading fontSize="2xl">{article.title}</Heading>
        <Text mt={2} fontSize="md" fontStyle="italic">
          Written by {article.author}
        </Text>
        <Text mt={4}>{article.body}</Text>
        <Divider mt={4} />
        <HStack mt={4}>
          <Text>Upvotes: {article.votes}</Text>
          <Button colorScheme="blue">Upvote</Button>
        </HStack>
      </Box>
      {/* Add comments section here */}
    </VStack>
  );
};

export default Article;
