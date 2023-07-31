import {configureStore} from '@reduxjs/toolkit';
import {lockerReducer} from './slices/lockersSlice';

export const store = configureStore({
  reducer: {
    lockers: lockerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export const actionCreators = {};
