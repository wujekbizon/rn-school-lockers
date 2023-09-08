import {createSlice} from '@reduxjs/toolkit';
import {RumorsState} from '../../types/lockersState';
import {fetchAllRumors} from '../thunks/getAllRumors';

const initialState: RumorsState = {
  rumors: [],
  isLoading: false,
  error: null,
};

const rumorsSlice = createSlice({
  name: 'rumors',
  initialState,
  reducers: {},
  extraReducers(builder) {
    // get all rumors
    builder.addCase(fetchAllRumors.pending, (state: RumorsState) => {
      state.isLoading = true;
    });
    builder.addCase(
      fetchAllRumors.fulfilled,
      (state: RumorsState, {payload}) => {
        state.isLoading = false;
        state.rumors = payload;
      },
    );
    builder.addCase(
      fetchAllRumors.rejected,
      (state: RumorsState, {payload}) => {
        state.isLoading = false;
        if (!payload) {
          return;
        }
        state.error = payload;
      },
    );
  },
});

export const rumorsReducer = rumorsSlice.reducer;
