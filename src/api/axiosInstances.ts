import axios from 'axios';

export const lockersInstance = axios.create({
  // temp api address , it's need to be change every time I start Ec2 instance
  baseURL: 'http://18.197.151.255:5100/api/v1/lockers',
});

export const rumorsInstance = axios.create({
  // temp api address , it's need to be change every time I start Ec2 instance
  baseURL: 'http://18.197.151.255:5100/api/v1',
});
