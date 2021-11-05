
import {
    configureStore,
    combineReducers,
    applyMiddleware,
    createStore,
} from '@reduxjs/toolkit';
import characterReducer from './features/character/characterSlice';

const rootReducer = combineReducers({
   character: characterReducer
});
//
export type RootState = ReturnType<typeof rootReducer>;

//const store = createStore(rootReducer);
//export default store;

export default configureStore({
  reducer: rootReducer
});