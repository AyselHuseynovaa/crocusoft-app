import React, { createContext } from "react";
import useTodoState from '../hooks/useTodoState';

const initialTodos = [{ id: 1, task: "Sleep", completde: false }];

export const TodosContext = createContext(initialTodos);

export function TodosProvider(props) {

  const TodosDatas = useTodoState(initialTodos);

  return (

    <TodosContext.Provider value={TodosDatas}>
      {props.children}
    </TodosContext.Provider>

  );
}
