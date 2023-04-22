import React, { useEffect, useState } from 'react';
import { Box, VStack, Heading, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import apiClient from '../apiClient';
import { useTopic } from '../contexts/TopicsContext';

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);
  const { selectedTopic } = useTopic();

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await apiClient.get(
          selectedTopic
            ? `/articles?topic=${selectedTopic}`
            : '/articles',
        );
        setArticles(response.data.articles);
        setError(null);
      } catch (err) {
        console.error('Error fetching articles:', err);
        setError(err.message);
      }
    };
    fetchArticles();
  }, [selectedTopic]);

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <VStack spacing={4} align="stretch">
      {articles.map((article) => (
        <Box key={article.article_id} p="5" shadow="md" borderWidth="1px">
          <Heading fontSize="xl">
            <Link to={`/articles/${article.article_id}`}>{article.title}</Link>
          </Heading>
          <Text mt={4}>{article.body}</Text>
        </Box>
      ))}
    </VStack>
  );
};

export default ArticleList;
