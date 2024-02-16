import React, { ReactNode, createContext, useState } from "react";
import { Todo } from "./types/todo";

interface TodoContextType {
  todos: Todo[];
  setTodo: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const TodosContext = createContext<TodoContextType>({
  todos: [],
  setTodo: () => {},
});

interface Props {
  children: ReactNode;
}

const TodoProvider = ({ children }: Props) => {
  const [todos, setTodo] = useState<Todo[]>([]);
  return (
    <TodosContext.Provider value={{ todos, setTodo }}>
      {children}
    </TodosContext.Provider>
  );
};

export default TodoProvider;
