import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: (builder) => ({
    getPostsByLimit: builder.query({
      query: (page) => `posts?_limit=5&_page=${page}`,
    }),
    getCommentsByPostId: builder.query({
      query: (postId) => `posts/${postId}/comments`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPostsByLimitQuery, useGetCommentsByPostIdQuery } = postsApi