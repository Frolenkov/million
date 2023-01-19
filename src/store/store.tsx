import { combineReducers, configureStore } from '@reduxjs/toolkit';
import questionsSlice from './reducers/gameSlice';

const rootReducer = combineReducers({
  game: questionsSlice,
});

export const setupStore = () => configureStore({
  reducer: rootReducer,
});

export const store = setupStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
