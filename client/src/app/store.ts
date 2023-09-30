import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import auth from "../features/auth/AuthSlice";
import todo from "../features/todo/todoSlice";
import { api } from './services/api';
import { listenerMiddleware } from '../middleware/AuthMiddleware';

export const store = configureStore({
  reducer: {
    [api.reducerPath]:api.reducer,
    auth,
    todo
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware).prepend(listenerMiddleware.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
