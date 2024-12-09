import { useState } from "react";

export default function ToDoInput(props) {
  const { handleAddTodos, todoValue, setTodoValue } = props;

  //const [todoValue, setTodoValue] = useState("");

  return (
    <header>
      <input
        value={todoValue}
        onChange={(e) => {
          setTodoValue(e.target.value);
        }}
        placeholder="Enter ToDo..."
      ></input>
      <button
        onClick={() => {
          handleAddTodos(todoValue);
          setTodoValue("");
        }}
      >
        Add
      </button>
    </header>
  );
}
