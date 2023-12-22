import axios from 'axios';

const publicApi = axios.create({
  baseURL: 'https://task-management-app-server-tau.vercel.app',
});

const usePublicApi = () => {
  return publicApi;
};

export default usePublicApi;
