import React, { useState, useEffect } from 'react';
import {
  Box,
  VStack,
  Heading,
  Text,
  Divider,
  Spinner,
  Flex,
} from '@chakra-ui/react';
import apiClient from '../apiClient';
import CommentForm from './CommentForm';

const CommentList = ({ article_id }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await apiClient.get(
          `/articles/${article_id}/comments`
        );
        setComments(response.data.comments);
      } catch (error) {
        console.error('Error fetching comments:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchComments();
  }, [article_id]);

  const addComment = (newComment) => {
    setComments((prevComments) => [...prevComments, newComment]);
  };

  const handleCommentAdded = async (newComment) => {
    if (newComment) {
      setComments((prevComments) => [...prevComments, newComment]);
    }
  };

  if (loading) {
    return (
      <Flex justifyContent="center" alignItems="center" minH="100vh">
        <Spinner size="xl" />
      </Flex>
    );
  }

  return (
    <VStack spacing={4} align="start" w="100%">
      <CommentForm article_id={article_id} onCommentAdded={handleCommentAdded} key={refreshKey}/>
      <Heading size="lg">Comments</Heading>
      {comments.map((comment) => (
        <Box key={comment.comment_id} w="100%">
          <Text fontSize="md" fontWeight="bold">
            {comment.author}
          </Text>
          <Text>{comment.body}</Text>
          <Text fontSize="sm" color="gray.500">
            {new Date(comment.created_at).toLocaleString()}
          </Text>
          <Divider mt={4} mb={4} />
        </Box>
      ))}
    </VStack>
  );
};

export default CommentList;
