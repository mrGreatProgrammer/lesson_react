import { combineReducers, configureStore } from "@reduxjs/toolkit";
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from "@reduxjs/toolkit/query";
import { pokemonApi } from "../services/app";
import { postsApi } from "../services/posts";
import { commentsApi } from "../services/comments";
// import { pokemonApi } from './services/pokemon'
import app from "./app";
import { usersApi } from "../services/users";
import { todosApi } from "../services/todos";

import { persistStore, persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage' 

const rootReducer = combineReducers({
  // Add the generated reducer as a specific top-level slice
  app,
  [pokemonApi.reducerPath]: pokemonApi.reducer,
  [postsApi.reducerPath]: postsApi.reducer,
  [commentsApi.reducerPath]: commentsApi.reducer,
  [usersApi.reducerPath]: usersApi.reducer,
  [todosApi.reducerPath]: todosApi.reducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['app']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)


const store = configureStore({
  reducer: persistedReducer,
  // reducer: {
  //   // Add the generated reducer as a specific top-level slice
  //   app,
  //   [pokemonApi.reducerPath]: pokemonApi.reducer,
  //   [postsApi.reducerPath]: postsApi.reducer,
  //   [commentsApi.reducerPath]: commentsApi.reducer,
  //   [usersApi.reducerPath]: usersApi.reducer,
  //   [todosApi.reducerPath]: todosApi.reducer,
  // },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat([
      pokemonApi.middleware,
      postsApi.middleware,
      commentsApi.middleware,
      usersApi.middleware,
      todosApi.middleware,
    ]),
    // getDefaultMiddleware().concat(postsApi.middleware),
  });
  
  // optional, but required for refetchOnFocus/refetchOnReconnect behaviors
  // see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
  setupListeners(store.dispatch);
  

export const persistor = persistStore(store)
export default store
