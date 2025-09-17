import { useState } from "react";

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
    setTodos([...todos, newTodo]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue) {
      addTodo(inputValue);
    }
  };

  return (
    <div>
      <h1>La mia Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} placeholder="Inserisci ToDo" />
        <button type="submit">Aggiungi</button>
      </form>
    </div>
  );
};

export default TodoApp;
