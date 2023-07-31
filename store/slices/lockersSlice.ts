import {createSlice} from '@reduxjs/toolkit';
import type {AuthLockerState} from '../../types/lockersState';
import {loginLocker} from '../thunks/loginLocker';
import {logoutLocker} from '../thunks/logoutLocker';
import {registerLocker} from '../thunks/registerLocker';

const initialState: AuthLockerState = {
  lockers: [],
  currentLocker: null,
  isLoading: false,
  error: null,
  isAdmin: false,
  isAuthenticated: false,
};

const lockerSlice = createSlice({
  name: 'lockers',
  initialState,
  reducers: {},
  extraReducers(builder) {
    // login locker
    builder.addCase(loginLocker.pending, (state: AuthLockerState) => {
      state.isLoading = true;
    });
    builder.addCase(
      loginLocker.fulfilled,
      (state: AuthLockerState, {payload}) => {
        state.isLoading = false;
        state.currentLocker = payload.locker;
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
    // logout locker
    builder.addCase(logoutLocker.pending, (state: AuthLockerState) => {
      state.isLoading = true;
    });
    builder.addCase(logoutLocker.fulfilled, (state: AuthLockerState) => {
      state.isLoading = false;
      state.currentLocker = null;
      state.isAuthenticated = false;
      state.isAdmin = false;
    });
    builder.addCase(
      logoutLocker.rejected,
      (state: AuthLockerState, {payload}) => {
        state.isLoading = false;
        if (!payload) {
          return;
        }
        state.error = payload;
      },
    );

    // register locker
    builder.addCase(registerLocker.pending, (state: AuthLockerState) => {
      state.isLoading = true;
    });
    builder.addCase(
      registerLocker.fulfilled,
      (state: AuthLockerState, {payload}) => {
        state.isLoading = false;
        state.lockers.push(payload.locker);
      },
    );
    builder.addCase(
      registerLocker.rejected,
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

export const lockerReducer = lockerSlice.reducer;
