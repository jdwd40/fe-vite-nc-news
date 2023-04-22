import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Box,
  Flex,
  Spacer,
  Button,
  Select,
  CircularProgress,
} from '@chakra-ui/react';
import { useAuth } from '../contexts/AuthContext';
import apiClient from '../apiClient';
import { useTopic } from '../contexts/TopicsContext';


const NavBar = () => {
  const { user, logout } = useAuth();
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);
  const history = useHistory();
  const { setSelectedTopic } = useTopic();

  useEffect(() => {
    const fetchTopics = async () => {
      const response = await apiClient.get('/topics');
      setTopics(response.data.topics);
      setLoading(false);
    };
    fetchTopics();
  }, []);

  const handleTopicSelect = (e) => {
    const selectedTopic = e.target.value;
    setSelectedTopic(selectedTopic);
  };


  return (
    <Box bg="teal.400" p={4}>
      <Flex>
        <Box p="2">
          <a href="/">Nc News</a>
        </Box>
        <Box p="2">
          {loading ? (
            <CircularProgress isIndeterminate color="white" size="24px" />
          ) : (
            <Select placeholder="Select a topic" onChange={handleTopicSelect}>
              {topics.map((topic) => (
                <option key={topic.slug} value={topic.slug}>
                  {topic.slug}
                </option>
              ))}
            </Select>
          )}
        </Box>
        <Spacer />
        {user ? (
          <Box>
            <span>{user.username}</span>
            <Button ml="4" onClick={logout} colorScheme="blue">
              Logout
            </Button>
          </Box>
        ) : (
          <Box>
            <a href="/login">Login</a>
          </Box>
        )}
      </Flex>
    </Box>
  );
};

export default NavBar;
