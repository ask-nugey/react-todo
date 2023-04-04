import React from "react";
import "./App.css";
import { useState, useRef } from "react";
import Todolist from "./Todolist";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [todos, setTodos] = useState([]);

  const todoNameRef = useRef();

  //タスクを追加
  const handleAddTodo = () => {
    const name = todoNameRef.current.value;
    if (name === "") return;

    setTodos((prevTodos) => {
      return [{ id: uuidv4(), name: name, completed: false }, ...prevTodos];
    });
    todoNameRef.current.value = null;
  };

  // チェックのトグル
  const toggleTodo = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    console.log(newTodos);
    setTodos(newTodos);
  };

  // todoの削除
  const clearTodo = (id) => {
    const newTodos = [...todos];
    newTodos.splice(id, 1);
    setTodos(newTodos);
  };

  // 完了済みタスクをすべて削除
  const handleClear = (id) => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };

  // 残りのタスクのカウント
  const countRemainedTodo = todos.filter((todo) => !todo.completed).length;

  return (
    <>
      <h1>React Todoアプリ</h1>
      <div className="c-addBlock">
        <input type="text" ref={todoNameRef} />
        <button onClick={handleAddTodo}>タスクを追加</button>
      </div>
      <Todolist todos={todos} toggleTodo={toggleTodo} clearTodo={clearTodo} />
      <div className="c-todoFooter">
        <p>残りのタスク：{countRemainedTodo}</p>
        <button onClick={handleClear}>完了タスクをすべて削除</button>
      </div>
    </>
  );
};

export default App;
