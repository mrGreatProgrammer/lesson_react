import { configureStore } from "@reduxjs/toolkit";
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from "@reduxjs/toolkit/query";
import { pokemonApi } from "../services/app";
import { postsApi } from "../services/posts";
import { commentsApi } from "../services/comments";
// import { pokemonApi } from './services/pokemon'
import app from "./app";
import { usersApi } from "../services/users";
import { todosApi } from "../services/todos";

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    app,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    [postsApi.reducerPath]: postsApi.reducer,
    [commentsApi.reducerPath]: commentsApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [todosApi.reducerPath]: todosApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
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
