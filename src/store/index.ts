import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import templateReducer from './modules/template/index';
import counterReducer from './modules/counter/index';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    template: templateReducer
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;