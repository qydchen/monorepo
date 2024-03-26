import React, { ChangeEvent, useContext } from "react";
import { Todo } from "../../types/todo";
import { TodosContext } from "./TodoProvider";

const TodoContainer = () => {
  const { todos, setTodo } = useContext(TodosContext);
  const [text, setText] = React.useState<string>("");
  const handleTodoText = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const addTodo = () => {
    let newTodo: Todo = { id: todos.length + 1, text, completed: false };
    setText("");
    setTodo([...todos, newTodo]);
  };

  const handleCheck = (id: number) => () => {
    setTodo(
      todos.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const deleteTodo = (id: number) => () => {
    setTodo(todos.filter((t) => t.id !== id));
  };

  return (
    <div style={{ width: 300 }}>
      <ul data-testid="todo-list">
        {todos.map((t) => {
          return (
            <li key={t.id}>
              <span>{t.text}</span>
              <input type="checkbox" onClick={handleCheck(t.id)}></input>
              <button onClick={deleteTodo(t.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
      <input
        placeholder="Add todo"
        type="text"
        onChange={handleTodoText}
        value={text}
      />
      <button onClick={addTodo} data-testid="todo-form-submit">
        Add
      </button>
    </div>
  );
};

export default TodoContainer;
