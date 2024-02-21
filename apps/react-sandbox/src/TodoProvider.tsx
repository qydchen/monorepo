import React, {
  ReactNode,
  Suspense,
  createContext,
  useEffect,
  useState,
} from "react";
import { Todo } from "./types/todo";
import useTodoLoader from "./useTodos";

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
  const payload = useTodoLoader<Todo>();
  const [todos, setTodo] = useState<Todo[]>([]);
  useEffect(() => {
    setTodo(payload);
  }, [payload]);

  return (
    <TodosContext.Provider value={{ todos, setTodo }}>
      <Suspense fallback={<span>LOADING...</span>}>{children}</Suspense>
    </TodosContext.Provider>
  );
};

export default TodoProvider;
