import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { VStack, Box, Heading, Text } from '@chakra-ui/react';
import apiClient from '../apiClient';
import { useTopic } from '../contexts/TopicsContext';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const { selectedTopic } = useTopic();
  const history = useHistory();
  const location = useLocation();

  const [loading, setLoading] = useState(false);

  const fetchArticles = async () => {
    const params = new URLSearchParams(location.search);
    const topic = params.get('topic');
    const response = await apiClient.get('/articles', { params: { topic } });
    setArticles(response.data.articles);
  };

  useEffect(() => {
    fetchArticles();
  }, [location.search]);
  
  console.log(articles);
  return (
    <VStack spacing={4} align="stretch">
      {articles.map((article) => (
        <Box key={article.article_id} p="5" shadow="md" borderWidth="1px">
          <Heading fontSize="xl">
            <Link to={`/articles/${article.article_id}`}>{article.title}</Link>
          </Heading>
          <Text mt={2} fontSize="sm">
            Author: {article.author}
          </Text>
        </Box>
      ))}
    </VStack>
  );
};

export default ArticleList;
