import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, toggleItem }) => {
  console.log("props", todos);
  return (
    <div>
      {todos.map(todo => {
        return <TodoItem todo={todo} key={todo.id} toggleItem={toggleItem} />;
      })}
    </div>
  );
};

export default TodoList;
