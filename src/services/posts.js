import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const postsApi = createApi({
  reducerPath: 'postsAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: (builder) => ({
    getPostsByLimit: builder.query({
      query: (page) => `posts?_limit=25&_page=${page}`,
    }),
    getPostsByUserId: builder.query({
      query: ({page, userId}) => `posts?_limit=25&_page=${page}&userId=${userId}`,
    }),
    getCommentsByPostId: builder.query({
      query: (postId) => `posts/${postId}/comments`,
    }),
    addPost: builder.query({
      query: (postImg, postTitle, postBody,  ) => ({url: `posts`,
    method: "POST",
    body: {
      postImg,
      postTitle,
      postBody,
    }
    }),
    })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPostsByLimitQuery, useGetCommentsByPostIdQuery, useGetPostsByUserIdQuery } = postsApi