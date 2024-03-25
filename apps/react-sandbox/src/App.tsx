import React from "react";
import "./App.css";
import TodoContainer from "./features/todo/Todo";
import TodoProvider from "./features/todo/TodoProvider";
import Autocomplete from "./features/autocomplete/Autocomplete";

function App(): React.ReactElement {
  return (
    <div className="App">
      <div>Todo Component</div>
      <TodoProvider>
        <TodoContainer />
      </TodoProvider>
      <div>Autocomplete Component</div>
      <Autocomplete />
    </div>
  );
}

export default App;
