import axios from 'axios';

const publicApi = axios.create({
  baseURL: 'https://task-management-app-server-tau.vercel.app',
  // baseURL: 'http://localhost:5000',
});

const usePublicApi = () => {
  return publicApi;
};

export default usePublicApi;
