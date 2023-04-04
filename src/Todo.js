import React from "react";

const Todo = ({ todo, toggleTodo, clearTodo }) => {
  const handleTodoClick = () => {
    toggleTodo(todo.id);
  };
  const handleClear = () => {
    clearTodo(todo.id);
  };

  return (
    <div>
      <div className="c-radioBtn">
        <input
          type="checkbox"
          checked={todo.completed}
          readOnly
          onChange={handleTodoClick}
        />
        <label>
          <span>{todo.name}</span>
        </label>
      </div>
      <i onClick={handleClear} className="icon-X"></i>
    </div>
  );
};

export default Todo;
