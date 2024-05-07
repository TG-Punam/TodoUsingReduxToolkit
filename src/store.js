// // src/store.js

// import { configureStore } from '@reduxjs/toolkit';
// // import todosReducer, { fetchTodos } from './features/todosSlice';
// import todosReducer, { fetchTodos } from './features/todoSlice'

// export default configureStore({
//   reducer: {
//     todos: todosReducer,
//   },
// });

// // Fetch initial todos on app load
// store.dispatch(fetchTodos());



// src/store.js

import { configureStore } from '@reduxjs/toolkit';
import todosReducer, { fetchTodos } from './features/todoSlice'

const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});

// Fetch initial todos on app load
store.dispatch(fetchTodos());

export default store;
