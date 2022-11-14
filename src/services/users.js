import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const usersApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getUsersByLimit: builder.query({
      query: (page) => `users?_limit=8&_page=${page}`,
    }),
    getAllUsers: builder.query({
      query: () => `users`,
    }),
    searchUsers: builder.query({
      query: ({ search }) => `users?username=${search}`,
    }),
    getUsersByPostId: builder.query({
      query: (postId) => `posts/${postId}/users`,
    }),
    getUsersById: builder.query({
      query: (userId) => `users?id=${userId}`,
    }),

  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetUsersByLimitQuery,
  useGetUsersByPostIdQuery,
  useSearchUsersQuery,
  useGetAllUsersQuery,
  useGetUsersByIdQuery
} = usersApi;
