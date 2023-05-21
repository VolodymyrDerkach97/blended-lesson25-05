import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const todosApi = createApi({
  reducerPath: 'todos',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://6469e2e2183682d6144862c0.mockapi.io',
  }),
  tagTypes: ['Todos'],
  endpoints: builder => ({
    fetchContacts: builder.query({
      query: () => '/todos',
      providesTags: ['Todos'],
    }),
    deleteContact: builder.mutation({
      query: contactId => ({
        url: `/todos/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Todos'],
    }),
    updateContact: builder.mutation({
      query: ({id, ...todo }) => ({
        url: `/todos/${id}`,
        method: 'PUT',
         body: todo,
      }),
      invalidatesTags: ['Todos'],
    }),
    createContact: builder.mutation({
      query: (todo) => ({
        url: '/todos',
        method: 'POST',
        body: todo
      }),
      invalidatesTags: ['Todos'],
    }),
  }),
});



export const {
  useCreateContactMutation,
  useDeleteContactMutation,
  useFetchContactsQuery,
  useUpdateContactMutation
} = todosApi;

// const slice = createSlice({
//   name: 'todos',
//   initialState: [],
//   reducers: {
//     addTodo: (state, action) =>[...state, action.payload],
//     deleteTodo: (state, action) =>
//       state.filter(todo => todo.id !== action.payload),
//     editTodo: (state, action) =>
//       state.map(item => {
//         if (action.payload.id === item.id) {
//             return {...action.payload};
//             // item.text = action.payload.text;
//         }
//         return item;
//       }),
//   },
// });
// const { actions, reducer } = slice;
// export default reducer;
// export const { addTodo, deleteTodo, editTodo} = actions;


//   const deleteTodo = id => {
//     setTodos(todos.filter(todo => todo.id !== id));
//   };

//   const handleEditTodo = ({ id, ...todo }) => {
//     setTodos(
//       todos.map(item => {
//         if (id === item.id) {
//           item.text = todo.text;
//         }
//         return item;
//       })
//     );
//   };
