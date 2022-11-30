import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const todosApi = createApi({
  reducerPath: "todosAPI",
  tagTypes: ['Post'],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://6246c1b4e3450d61b00249a5.mockapi.io/",
  }),
  endpoints: (builder) => ({
    getTodosByLimit: builder.query({
      query: () => `todo`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Post', id })),
              { type: 'Post', id: 'LIST' },
            ]
          : [{ type: 'Post', id: 'LIST' }],
    }),
    addTodo: builder.mutation({
      query: ({ todoTitle, todoDesc }) => ({
        url: `todo`,
        method: "POST",
        body: {
          title: todoTitle,
          desc: todoDesc,
        },
      }),
      invalidatesTags: [{ type: 'Post', id: 'LIST' }]
    }),
    deleteTodo: builder.mutation({
      query: ({ todoId }) => ({
        url: `todo/${todoId}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: 'Post', id: 'LIST' }]
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetTodosByLimitQuery, useAddTodoMutation, useDeleteTodoMutation } = todosApi;
