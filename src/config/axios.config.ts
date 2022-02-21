import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://centra-flights-api.herokuapp.com',
  headers: {
    "auth" : `PprxhenEbxzmL7YrOuRZ0EqSwpCzcqU2`  }
});

export default apiClient;
