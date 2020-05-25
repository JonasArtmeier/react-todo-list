import React from 'react';
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
const Todo = ({ todo, toggleTodo }) => {
  function handleTodoClick() {
    toggleTodo(todo.id);
  }
  return (
    <div
      css={css`
        display: grid;
        align-items: center;
        justify-content: center;
        color: darkred;
        flex: box;
        background-color: grey;
        height: 30px;
        width: 100px;
        padding: 5px;
        borde
      `}
    >
      <label>
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={handleTodoClick}
        />
        {todo.name}
      </label>
    </div>
  );
};
export default Todo;
