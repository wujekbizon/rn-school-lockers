import {createSlice} from '@reduxjs/toolkit';
import type {Locker} from '../../types/locker';

interface LockersState {
  lockers: Locker[];
  isFetching: boolean;
  error: boolean;
}

const initialState: LockersState = {
  lockers: [],
  isFetching: false,
  error: false,
};

const lockersSlice = createSlice({
  name: 'lockers',
  initialState,
  reducers: {},
});

export const lockersReducer = lockersSlice.reducer;
