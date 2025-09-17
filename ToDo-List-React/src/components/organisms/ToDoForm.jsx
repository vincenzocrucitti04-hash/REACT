import { useState } from "react";

function ToDoForm({ addTodo }) {
  const [inputValue, setInputValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue) {
      addTodo(inputValue);
      setInputValue("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Inserisci ToDo"
      />
      <button type="submit">Aggiungi</button>
    </form>
  );
}

export default ToDoForm;
