import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {lockerReducer} from './slices/lockersSlice';
import {
  rumorsReducer,
  sortRumorsAscending,
  sortRumorsDescending,
  sortRumorsByDate,
} from './slices/rumorsSlice';
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
  middleware: getDefaultMiddleware => {
    if (process.env.NODE_ENV === 'development') {
      return getDefaultMiddleware({
        serializableCheck: false,
      });
    }
    return getDefaultMiddleware();
  },
});

export type RootState = ReturnType<typeof store.getState>;

export const actionCreators = {
  openSideMenu,
  closeSideMenu,
  sortRumorsAscending,
  sortRumorsDescending,
  sortRumorsByDate,
};
