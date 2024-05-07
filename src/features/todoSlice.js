// // src/features/todosSlice.js

// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// // Async thunk for fetching initial todos (simulated API call)
// export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
//   const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');
//   const data = await response.json();
//   return data;
// });

// const todosSlice = createSlice({
//   name: 'todos',
//   initialState: {
//     items: [],
//     status: 'idle',
//     error: null,
//   },
//   reducers: {
//     addTodo: (state, action) => {
//       state.items.push(action.payload);
//     },
//     removeTodo: (state, action) => {
//       state.items = state.items.filter(todo => todo.id !== action.payload);
//     },
//     toggleTodo: (state, action) => {
//       const todo = state.items.find(todo => todo.id === action.payload);
//       if (todo) {
//         todo.completed = !todo.completed;
//       }
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchTodos.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(fetchTodos.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.items = action.payload;
//       })
//       .addCase(fetchTodos.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//       });
//   },
// });

// export const { addTodo, removeTodo, toggleTodo } = todosSlice.actions;
// export default todosSlice.reducer;



// src/features/todosSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk for fetching initial todos (simulated API call)
export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');
  const data = await response.json();
  return data;
});

const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    addTodo: (state, action) => {
      state.items.push(action.payload);
    },
    removeTodo: (state, action) => {
      state.items = state.items.filter(todo => todo.id !== action.payload);
    },
    toggleTodo: (state, action) => {
      const todo = state.items.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    updateTodoTitle: (state, action) => {
      const { id, newTitle } = action.payload;
      const todo = state.items.find(todo => todo.id === id);
      if (todo) {
        todo.title = newTitle;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { addTodo, removeTodo, toggleTodo, updateTodoTitle } = todosSlice.actions;
export default todosSlice.reducer;
