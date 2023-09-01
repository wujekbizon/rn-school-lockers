import {configureStore} from '@reduxjs/toolkit';
import {lockerReducer} from './slices/lockersSlice';
import {
  sideMenuReducer,
  openSideMenu,
  closeSideMenu,
} from './slices/sideMenuSlice';

export const store = configureStore({
  reducer: {
    lockers: lockerReducer,
    sideMenu: sideMenuReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export const actionCreators = {openSideMenu, closeSideMenu};
