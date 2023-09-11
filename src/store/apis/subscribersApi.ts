import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {SERVER_URL} from '../../constants/serverUrl'; // this base url change frequently
import {NewsmongersInterface} from '../../types/newsmongerTypes';

const subscribersApi = createApi({
  reducerPath: 'subscribers',
  baseQuery: fetchBaseQuery({
    baseUrl: `${SERVER_URL}/api/v1`,
  }),
  tagTypes: ['Subscription'],
  endpoints(builder) {
    return {
      fetchSubscribers: builder.query<NewsmongersInterface[], {_id?: string}>({
        providesTags: (result, error, arg) => {
          return [{type: 'Subscription', id: arg?._id}];
        },
        query: () => {
          return {
            url: '/newsmongers',
            method: 'GET',
          };
        },
      }),
      removeSubscriber: builder.mutation<
        NewsmongersInterface,
        NewsmongersInterface
      >({
        invalidatesTags: (result, error, arg) => {
          return [{type: 'Subscription', id: arg._id}];
        },
        query: subscription => {
          return {
            url: `/newsmongers/${subscription._id}`,
            method: 'DELETE',
          };
        },
      }),
    };
  },
});

export const {useFetchSubscribersQuery, useRemoveSubscriberMutation} =
  subscribersApi;

export {subscribersApi};
