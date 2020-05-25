import React, { useState, useRef, useEffect } from 'react';

import TodoList from './TodoList';
import uniqid from 'uniqid';

const LOCAL_STORAGE_KEY = 'todoApp.todos';

export default function App() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) setTodos(storedTodos);
  }, []);
  // empty array forces this function to only run on first render
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);
  function toggleTodo(id) {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodos);
  }
  function handleAddTodo(e) {
    const name = todoNameRef.current.value;
    if (name === '') return;
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uniqid(), name: name, complete: false }];
    });
    todoNameRef.current.value = null;
  }
  function handleClearTodos() {
    const newTodos = todos.filter((todo) => !todo.complete);
    setTodos(newTodos);
  }
  return (
    <>
      <h1>This is a ToDo List</h1>
      <input
        ref={todoNameRef}
        type="text"
        placeholder="what do you have to do?"
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button onClick={handleClearTodos}>Clear Completed Todo</button>
      <div>{todos.filter((todo) => !todo.complete).length} left to do</div>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <button type="button" onClick={() => setTodos([])}>
        delete all
      </button>
    </>
  );
}
