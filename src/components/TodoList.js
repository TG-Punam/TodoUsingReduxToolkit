// // src/App.js

// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// // import { addTodo, removeTodo, toggleTodo } from './features/todosSlice';
// import { addTodo, removeTodo, toggleTodo } from '../features/todoSlice';

// function TodoList() {
//   const dispatch = useDispatch();
//   const todos = useSelector(state => state.todos.items);
//   const status = useSelector(state => state.todos.status);
//   const error = useSelector(state => state.todos.error);

//   const handleAddTodo = () => {
//     const newTodo = {
//       id: Date.now(),
//       title: `Todo ${todos.length + 1}`,
//       completed: false,
//     };
//     dispatch(addTodo(newTodo));
//   };

//   const handleRemoveTodo = (id) => {
//     dispatch(removeTodo(id));
//   };

//   const handleToggleTodo = (id) => {
//     dispatch(toggleTodo(id));
//   };

//   return (
//     <div className="container">
//       <h1>Todo List</h1>
//       {status === 'loading' && <div>Loading...</div>}
//       {status === 'failed' && <div>Error: {error}</div>}
//       {status === 'succeeded' && (
//         <div>
//           <button onClick={handleAddTodo}>Add Todo</button>
//           <ul>
//             {todos.map(todo => (
//               <li key={todo.id}>
//                 <input
//                   type="checkbox"
//                   checked={todo.completed}
//                   onChange={() => handleToggleTodo(todo.id)}
//                 />
//                 <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.title}</span>
//                 <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }

// export default TodoList;




// src/App.js

// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { addTodo, removeTodo, toggleTodo, updateTodoTitle, fetchTodos } from '../features/todoSlice';
// // import './styles.css';

// function App() {
//   const dispatch = useDispatch();
//   const todos = useSelector(state => state.todos.items);
//   const status = useSelector(state => state.todos.status);
//   const error = useSelector(state => state.todos.error);
//   const [newTodoTitle, setNewTodoTitle] = useState('');

//   const handleAddTodo = () => {
//     if (newTodoTitle.trim() === '') return;
//     const newTodo = {
//       id: Date.now(),
//       title: newTodoTitle,
//       completed: false,
//     };
//     dispatch(addTodo(newTodo));
//     setNewTodoTitle('');
//   };

//   const handleRemoveTodo = (id) => {
//     dispatch(removeTodo(id));
//   };

//   const handleToggleTodo = (id) => {
//     dispatch(toggleTodo(id));
//   };

//   const handleUpdateTodoTitle = (id, newTitle) => {
//     dispatch(updateTodoTitle({ id, newTitle }));
//   };

//   return (
//     <div className="container">
//       <h1 className="title">My Tasks</h1>
//       <div className="add-todo-form">
//         <input
//           type="text"
//           className="add-todo-input"
//           placeholder="Add new todo"
//           value={newTodoTitle}
//           onChange={(e) => setNewTodoTitle(e.target.value)}
//         />
//         <button className="add-todo-btn" onClick={handleAddTodo}>Add</button>
//       </div>
//       {status === 'loading' && <div>Loading...</div>}
//       {status === 'failed' && <div>Error: {error}</div>}
//       {status === 'succeeded' && (
//         <ul className="todo-list">
//           {todos.map(todo => (
//             <li key={todo.id} className="todo-item">
//               <input
//                 type="checkbox"
//                 checked={todo.completed}
//                 onChange={() => handleToggleTodo(todo.id)}
//               />
//               <input
//                 type="text"
//                 value={todo.title}
//                 onChange={(e) => handleUpdateTodoTitle(todo.id, e.target.value)}
//                 className={todo.completed ? 'completed' : ''}
//               />
//               <button className="remove-btn" onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// export default App;



// src/App.js

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo, toggleTodo, updateTodoTitle, fetchTodos } from '../features/todoSlice';
import './TodoList.css';

function TodoList() {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos.items);
  const status = useSelector(state => state.todos.status);
  const error = useSelector(state => state.todos.error);
  const [newTodoTitle, setNewTodoTitle] = useState('');

  const handleAddTodo = () => {
    if (newTodoTitle.trim() === '') return;
    const newTodo = {
      id: Date.now(),
      title: newTodoTitle,
      completed: false,
    };
    dispatch(addTodo(newTodo));
    setNewTodoTitle('');
  };

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  };

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleUpdateTodoTitle = (id, newTitle) => {
    dispatch(updateTodoTitle({ id, newTitle }));
  };

  return (
    <div className="container">
      {/* <h1 className="title">My Tasks</h1> */}
      <div className="add-todo-form">
        <input
          type="text"
          className="add-todo-input"
          placeholder="Add new todo"
          value={newTodoTitle}
          onChange={(e) => setNewTodoTitle(e.target.value)}
        />
        <button className="add-todo-btn" onClick={handleAddTodo}>Add</button>
      </div>
      {status === 'loading' && <div>Loading...</div>}
      {status === 'failed' && <div>Error: {error}</div>}
      {status === 'succeeded' && (
        <ul className="todo-list">
          {todos.map(todo => (
            <li key={todo.id} className="todo-item">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleToggleTodo(todo.id)}
              />
              <input
                type="text"
                value={todo.title}
                onChange={(e) => handleUpdateTodoTitle(todo.id, e.target.value)}
                className={todo.completed ? 'completed' : ''}
              />
              <i className="fas fa-trash-alt remove-icon" onClick={() => handleRemoveTodo(todo.id)}></i>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TodoList;
