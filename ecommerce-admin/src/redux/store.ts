// store.js
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import authSlice from './reducers/authSlice';
import categorySlice from './reducers/categorySlice';

const authPersistConfig = {
    key: 'auth',
    storage,
};

const rootReducer = combineReducers({
    auth: persistReducer(authPersistConfig, authSlice),
    category: categorySlice,
    // add other reducers here
});

const store = configureStore({
    reducer: rootReducer,
});

const persistor = persistStore(store);
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export { store, persistor };
