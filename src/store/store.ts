import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {authReducer} from './slices/authSlice';
import {
  rumorsReducer,
  sortRumorsAscending,
  sortRumorsDescending,
  sortRumorsByDate,
  openRumorModal,
  closeRumorModal,
} from './slices/rumorsSlice';
import {
  sideMenuReducer,
  openSideMenu,
  closeSideMenu,
} from './slices/sideMenuSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
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
  openRumorModal,
  closeRumorModal,
};
