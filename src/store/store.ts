import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/dist/query';
import {lockersApi} from './apis/lockersApi';
import {subscribersApi} from './apis/subscribersApi';
import {authReducer} from './slices/authSlice';
import {
  rumorsReducer,
  sortRumorsAscending,
  sortRumorsDescending,
  sortRumorsByDate,
  openRumorModal,
  closeRumorModal,
  getEditedRumor,
  updateEditedRumor,
} from './slices/rumorsSlice';
import {
  sideMenuReducer,
  openSideMenu,
  closeSideMenu,
} from './slices/sideMenuSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [lockersApi.reducerPath]: lockersApi.reducer,
    rumors: rumorsReducer,
    [subscribersApi.reducerPath]: subscribersApi.reducer,
    sideMenu: sideMenuReducer,
  },
  middleware: getDefaultMiddleware => {
    if (process.env.NODE_ENV === 'development') {
      return getDefaultMiddleware({
        serializableCheck: false,
      })
        .concat(lockersApi.middleware)
        .concat(subscribersApi.middleware);
    }
    return getDefaultMiddleware()
      .concat(lockersApi.middleware)
      .concat(subscribersApi.middleware);
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
  getEditedRumor,
  updateEditedRumor,
};
export {useFetchLockersQuery} from '../store/apis/lockersApi';
export {useFetchSubscribersQuery} from '../store/apis/subscribersApi';
export {useRemoveSubscriberMutation} from './apis/subscribersApi';

setupListeners(store.dispatch);
