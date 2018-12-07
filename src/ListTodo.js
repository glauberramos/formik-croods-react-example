import React from "react";
import { Info } from "croods";

export default () => {
  const generateTodos = info => {
    const parsedInfo = JSON.parse(info.message);
    return parsedInfo.map(todo => <li key={todo.uid}>{todo.title}</li>);
  };

  return (
    <Info
      id="todos"
      name="todos"
      path="/todos"
      render={info => (
        <div>
          <ul>{generateTodos(info)}</ul>
        </div>
      )}
    />
  );
};
