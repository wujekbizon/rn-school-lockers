import {configureStore} from '@reduxjs/toolkit';
import {lockerReducer} from './slices/lockersSlice';
import {rumorsReducer} from './slices/rumorsSlice';
import {
  sideMenuReducer,
  openSideMenu,
  closeSideMenu,
} from './slices/sideMenuSlice';

export const store = configureStore({
  reducer: {
    lockers: lockerReducer,
    rumors: rumorsReducer,
    sideMenu: sideMenuReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export const actionCreators = {openSideMenu, closeSideMenu};
