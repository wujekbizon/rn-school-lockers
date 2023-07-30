import {createSlice} from '@reduxjs/toolkit';
import type {Locker} from '../../types/locker';

interface LockersState {
  lockers: Locker[];
  isFetching: boolean;
  error: null | {};
}

const initialState: LockersState = {
  lockers: [],
  isFetching: false,
  error: null,
};

const lockersSlice = createSlice({
  name: 'lockers',
  initialState,
  reducers: {},
});

export const lockersReducer = lockersSlice.reducer;
