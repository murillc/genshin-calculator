
import {
    configureStore,
    combineReducers,
} from '@reduxjs/toolkit';
import characterReducer from './features/character/characterSlice';

const rootReducer = combineReducers({
   character: characterReducer
});

const store = configureStore({
  reducer: rootReducer
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;