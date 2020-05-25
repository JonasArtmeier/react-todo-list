import React from 'react';
import Todo from './Todo';
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
function TodoList({ todos, toggleTodo }) {
  return todos.map((todo) => {
    return <Todo key={todo.id} toggleTodo={toggleTodo} todo={todo} />;
  });
}
export default TodoList;
