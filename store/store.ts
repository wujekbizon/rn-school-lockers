import {configureStore} from '@reduxjs/toolkit';
import {lockersReducer} from './slices/lockersSlice';

export const store = configureStore({
  reducer: {
    lockers: lockersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const actionCreators = {};
