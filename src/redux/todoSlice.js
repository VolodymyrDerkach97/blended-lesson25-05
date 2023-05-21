import { createSlice } from '@reduxjs/toolkit';
const slice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) =>[...state, action.payload],
    deleteTodo: (state, action) =>
      state.filter(todo => todo.id !== action.payload),
    editTodo: (state, action) =>
      state.map(item => {
        if (action.payload.id === item.id) {
            return {...action.payload};
            // item.text = action.payload.text;
        }
        return item;
      }),
  },
});
const { actions, reducer } = slice;
export default reducer;
export const { addTodo, deleteTodo, editTodo} = actions;


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
