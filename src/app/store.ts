
import {
    configureStore,
    combineReducers,
} from '@reduxjs/toolkit';
import characterReducer from './features/character/characterSlice';
import artifactReducer from './features/artifact/artifactSlice';

const rootReducer = combineReducers({
   character: characterReducer,
   artifact: artifactReducer,
});

const store = configureStore({
  reducer: rootReducer
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;