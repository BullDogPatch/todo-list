import React from "react";

// this is where the todo item is created
const TodoItem = props => {
  // console.log(props);
  return (
    <div
      className={`todo${props.todo.completed ? " completed" : ""}`}
      onClick={() => props.toggleItem(props.todo.id)}
    >
      {props.todo.task}
    </div>
  );
};

export default TodoItem;
