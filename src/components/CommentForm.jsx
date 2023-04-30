import React, { useState, useEffect } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import apiClient from '../apiClient';

const CommentForm = ({ article_id, onCommentAdded }) => {
  const [author, setAuthor] = useState('');
  const [body, setBody] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await apiClient.post(
        `/articles/${article_id}/comments`,
        {
          username: author,
          body: body,
        }
      );
      if (response.status === 200) {
        onCommentAdded(response.data.comment);
        setAuthor('');
        setBody('');
        setSubmitted(true);
      }
    } catch (error) {
      console.error('Error submitting comment:', error);
    }
  };

  useEffect(() => {
    if (submitted) {
      onCommentAdded(null);
      setSubmitted(false);
    }
  }, [submitted, onCommentAdded]);

  return (
    <VStack as="form" onSubmit={handleSubmit} spacing={4} w="100%">
      <FormControl>
        <FormLabel>Author</FormLabel>
        <Input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Comment</FormLabel>
        <Textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          resize="vertical"
        />
      </FormControl>
      <Button type="submit">Submit Comment</Button>
    </VStack>
  );
};

export default CommentForm;