import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const todosApi = createApi({
  reducerPath: "todosAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://6246c1b4e3450d61b00249a5.mockapi.io/",
  }),
  endpoints: (builder) => ({
    getTodosByLimit: builder.query({
      query: () => `todo`,
    }),
    addTodo: builder.mutation({
      query: (todoTitle, todoDesc) => ({
        url: `todo`,
        method: "POST",
        body: {
          title: todoTitle,
          desc: todoDesc,
        },
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetTodosByLimitQuery, useAddTodoMutation } = todosApi;
