
import {
    configureStore,
    combineReducers,
    applyMiddleware,
    createStore,
} from '@reduxjs/toolkit';
import characterReducer from './reducers/characterReducer';




const rootReducer = combineReducers({
    character: characterReducer
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);
export default store;