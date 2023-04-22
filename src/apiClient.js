import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://77.68.4.18:9090/api',
});

export default apiClient;
