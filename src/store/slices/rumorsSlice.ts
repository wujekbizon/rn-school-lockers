import {createSlice} from '@reduxjs/toolkit';
import {RumorsState} from '../../types/lockersState';
import {fetchAllRumors} from '../thunks/getAllRumors';
import {deleteRumor} from '../thunks/deleteRumor';

const initialState: RumorsState = {
  rumors: [],
  isLoading: false,
  isDeleting: false,
  error: null,
  isRumorModalOpen: false,
};

const rumorsSlice = createSlice({
  name: 'rumors',
  initialState,
  reducers: {
    sortRumorsAscending(state: RumorsState) {
      state.rumors = state.rumors.sort((a, b) =>
        a.title.localeCompare(b.title),
      );
    },
    sortRumorsDescending(state: RumorsState) {
      state.rumors = state.rumors.sort((a, b) =>
        b.title.localeCompare(a.title),
      );
    },
    sortRumorsByDate(state: RumorsState) {
      state.rumors = state.rumors.sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
      );
    },
  },
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
    // delete rumor
    builder.addCase(deleteRumor.pending, (state: RumorsState) => {
      state.isDeleting = true;
    });
    builder.addCase(deleteRumor.fulfilled, (state: RumorsState, {payload}) => {
      state.isDeleting = false;
      const index = state.rumors.findIndex(rumor => rumor._id === payload._id);
      if (index !== -1) {
        state.rumors.splice(index, 1);
      }
    });
    builder.addCase(deleteRumor.rejected, (state: RumorsState, {payload}) => {
      state.isDeleting = false;
      if (!payload) {
        return;
      }
      state.error = payload;
    });
  },
});

export const {sortRumorsAscending, sortRumorsDescending, sortRumorsByDate} =
  rumorsSlice.actions;

export const rumorsReducer = rumorsSlice.reducer;
