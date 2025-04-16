import { combineReducers, configureStore } from '@reduxjs/toolkit'
import counterSlice from './features/counter';
import authSlice from './features/authSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer, persistStore } from 'redux-persist';
import productSlice from './features/productslice';
import cartSlice from './features/cartSlice';

// with async storage and redux persistet
const reducers = combineReducers({
  counter: counterSlice,
    auth: authSlice,
    products: productSlice,
    cart: cartSlice,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth', 'cart'] // put reducers that you do want to put in async storage
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  // to disable serialize
  middleware: getDefaultMiddleware => {
      return  getDefaultMiddleware({serializableCheck: false});
  }
});

const persistor = persistStore(store);

export {store, persistor};

// for normal 
/*
export const store = configureStore({
  reducer: {
    counter: counterSlice,
    auth: authSlice
  },
}); */


