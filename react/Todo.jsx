import { useState } from "react"; 

function Todo() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    setTodos([...todos, input]);
    setInput("");
  };

  const deleteTodo = index => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <>
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={addTodo}>Add</button>

      {todos.map((t, i) => (
        <div key={i}>
          {t} <button onClick={() => deleteTodo(i)}>X</button>
        </div>
      ))}
    </>
  );
}

export default Todo