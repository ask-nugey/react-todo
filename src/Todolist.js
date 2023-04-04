import React from "react";
import Todo from "./Todo";

const Todolist = ({ todos, toggleTodo, clearTodo }) => {
  return (
    <div className="c-todoTist">
      {todos.map((todo) => (
        <Todo
          todo={todo}
          key={todo.id}
          toggleTodo={toggleTodo}
          clearTodo={clearTodo}
        />
      ))}
    </div>
  );
};

export default Todolist;
