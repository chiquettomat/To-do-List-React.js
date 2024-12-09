import { useState, useEffect } from "react";
import ToDoInput from "./components/toDoInput";
import TodoList from "./components/TodoList";

function App() {
  const [toDos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState("");

  function persistData(newList) {
    localStorage.setItem("toDos", JSON.stringify({ toDos: newList }));
  }

  function handleAddTodos(newTodo) {
    const newTodoList = [...toDos, newTodo];
    persistData(newTodoList);
    setTodos(newTodoList);
  }

  function handleDeleteTodo(index) {
    const newTodoList = toDos.filter((todo, todoIndex) => {
      return todoIndex !== index;
    });
    persistData(newTodoList);

    setTodos(newTodoList);
  }

  function handleEditTodo(index) {
    const valueTobeEdited = toDos[index];
    setTodoValue(valueTobeEdited);
    handleDeleteTodo(index);
  }

  useEffect(() => {
    if (!localStorage) {
      return;
    }

    let localTodos = localStorage.getItem("toDos");
    if (!localTodos) {
      return;
    }

    localTodos = JSON.parse(localTodos).toDos;
    setTodos(localTodos);
  }, []);

  return (
    <>
      <ToDoInput
        todoValue={todoValue}
        setTodoValue={setTodoValue}
        handleAddTodos={handleAddTodos}
      ></ToDoInput>
      <TodoList
        handleEditTodo={handleEditTodo}
        handleDeleteTodo={handleDeleteTodo}
        toDos={toDos}
      ></TodoList>
    </>
  );
}

export default App;
