import { configureStore } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query'
import { pokemonApi } from '../services/app'
import { postsApi } from '../services/posts'
// import { pokemonApi } from './services/pokemon'
import app from './app';

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    app,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    [postsApi.reducerPath]: postsApi.reducer
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([pokemonApi.middleware, postsApi.middleware])
    // getDefaultMiddleware().concat(postsApi.middleware),
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)