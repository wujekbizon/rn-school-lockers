import axios from 'axios';
import {SERVER_URL} from '../constants/serverUrl';

export const lockersInstance = axios.create({
  // temp api address , it's need to be change every time I start Ec2 instance
  baseURL: `${SERVER_URL}/api/v1/lockers`,
});

export const rumorsInstance = axios.create({
  // temp api address , it's need to be change every time I start Ec2 instance
  baseURL: `${SERVER_URL}/api/v1`,
});
