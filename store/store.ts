import {configureStore} from '@reduxjs/toolkit';
import {lockersReducer} from './slices/lockersSlice';
import {authLockerReducer} from './slices/authLockerSlice';

export const store = configureStore({
  reducer: {
    lockers: lockersReducer,
    authLocker: authLockerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export * from './thunks/authLocker';

export const actionCreators = {};
