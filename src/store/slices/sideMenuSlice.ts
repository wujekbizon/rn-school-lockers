import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isSideMenuOpen: false,
};

const sideMenuSlice = createSlice({
  name: 'sideMenu',
  initialState,
  reducers: {
    openSideMenu: state => {
      state.isSideMenuOpen = true;
    },
    closeSideMenu: state => {
      state.isSideMenuOpen = false;
    },
  },
});

export const {openSideMenu, closeSideMenu} = sideMenuSlice.actions;
export const sideMenuReducer = sideMenuSlice.reducer;
