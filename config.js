import axios from 'axios';

const setAxiosConfigurations = () => {
  axios.defaults.baseURL = 'http://localhost:8000/api';
};

export default {
  setAxiosConfigurations
};
