import {createSlice} from '@reduxjs/toolkit';
import {RumorsState} from '../../types/lockersState';
import {fetchAllRumors} from '../thunks/getAllRumors';
import {deleteRumor} from '../thunks/deleteRumor';
import {createRumor} from '../thunks/createRumor';

const initialState: RumorsState = {
  rumors: [],
  modifiedRumorsIndexes: [],
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
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
      );
    },
    openRumorModal(state: RumorsState) {
      state.isRumorModalOpen = true;
    },
    closeRumorModal(state: RumorsState) {
      state.isRumorModalOpen = false;
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
      state.rumors = state.rumors.filter(rumor => rumor._id !== payload._id);
    });
    builder.addCase(deleteRumor.rejected, (state: RumorsState, {payload}) => {
      state.isDeleting = false;
      if (!payload) {
        return;
      }
      state.error = payload;
    });
    // create rumor
    builder.addCase(createRumor.pending, (state: RumorsState) => {
      state.isLoading = true;
    });
    builder.addCase(createRumor.fulfilled, (state: RumorsState, {payload}) => {
      state.isLoading = false;

      state.rumors = [...state.rumors, payload.rumor];
    });
    builder.addCase(createRumor.rejected, (state: RumorsState, {payload}) => {
      state.isLoading = false;
      if (!payload) {
        return;
      }
      state.error = payload;
    });
  },
});

export const {
  sortRumorsAscending,
  sortRumorsDescending,
  sortRumorsByDate,
  openRumorModal,
  closeRumorModal,
} = rumorsSlice.actions;

export const rumorsReducer = rumorsSlice.reducer;
