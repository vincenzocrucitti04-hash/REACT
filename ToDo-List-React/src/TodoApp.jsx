import React, { useState } from "react";
import ToDoForm from "./components/organisms/ToDoForm";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(), // ID semplice basato su timestamp
      text: text,
      completed: false,
      createdAt: new Date(),
    };
    // Aggiunge il nuovo task all'array esistente
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  return (
    <div>
      <h1>La mia Todo List</h1>
      <TodoForm onAddTodo={addTodo} />
    </div>
  );
};

export default TodoApp;
