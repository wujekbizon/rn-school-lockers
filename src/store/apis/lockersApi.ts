import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {SERVER_URL} from '../../constants/serverUrl'; // this base url change frequently
import {Locker} from '../../types/lockersState';

const lockersApi = createApi({
  reducerPath: 'lockers',
  baseQuery: fetchBaseQuery({
    baseUrl: `${SERVER_URL}/api/v1`,
  }),
  endpoints(builder) {
    return {
      fetchLockers: builder.query<Locker[], void>({
        query: () => {
          return {
            url: '/lockers',
            method: 'GET',
          };
        },
      }),
    };
  },
});

export const {useFetchLockersQuery} = lockersApi;

export {lockersApi};
