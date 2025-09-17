import { useState } from "react";
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
    setTodos([...todos, newTodo]);
  };
  const totaleTask = todos.length;
  const taskCompletati = todos.filter((todo) => todo.completed).length;
  const taskNonCompletati = todos.filter((todo) => !todo.completed).length;

  return (
    <div>
      <h1>La mia Todo List</h1>
      <ToDoForm addTodo={addTodo} />
      <div>
        <p>Totale Task: {totaleTask} </p>
        <p>Task Completate: {taskCompletati} </p>
        <p>Task Non completate: {taskNonCompletati} </p>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <h3>{todo.text}</h3>
            <p>{todo.completed ? "completato" : "non completato"}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
