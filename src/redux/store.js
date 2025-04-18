// store.js
import { configureStore } from '@reduxjs/toolkit';
import { authApi } from '../features/auth/api/authApi'; 
import {productApi} from '../features/product/api/productApi'

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware,productApi.middleware),
});
