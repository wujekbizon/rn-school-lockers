import axios from 'axios';

export const lockersInstance = axios.create({
  baseURL: 'http://3.127.37.237:5100/api/v1/lockers',
});
