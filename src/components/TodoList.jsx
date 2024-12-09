import React from "react";
import TodoCard from "./todo-card";
import ToDoInput from "./toDoInput";

export default function TodoList(props) {
  const { toDos } = props;

  return (
    <ul className="main">
      {toDos.map((todo, todoIndex) => {
        return (
          <TodoCard {...props} key={todoIndex} index={todoIndex}>
            <p>{todo}</p>
          </TodoCard>
        );
      })}
    </ul>
  );
}
