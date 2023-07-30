import {createSlice} from '@reduxjs/toolkit';
import type {Locker} from '../../types/locker';
import {loginLocker} from '../thunks/authLocker';

interface AuthLockerState {
  locker: Locker | {};
  isLoading: boolean;
  error: null | {message: string};
  isAdmin: boolean;
  isAuthenticated: boolean;
}

const initialState: AuthLockerState = {
  locker: {},
  isLoading: false,
  error: null,
  isAdmin: false,
  isAuthenticated: false,
};

const authLockerSlice = createSlice({
  name: 'authLocker',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(loginLocker.pending, (state: AuthLockerState) => {
      state.isLoading = true;
    });
    builder.addCase(
      loginLocker.fulfilled,
      (state: AuthLockerState, {payload}) => {
        state.isLoading = false;
        state.locker = payload.locker;
        state.isAuthenticated = true;

        if (payload.locker.role === 'admin') {
          state.isAdmin = true;
        }
      },
    );
    builder.addCase(
      loginLocker.rejected,
      (state: AuthLockerState, {payload}) => {
        state.isLoading = false;
        if (!payload) {
          return;
        }
        state.error = payload;
      },
    );
  },
});

export const authLockerReducer = authLockerSlice.reducer;
