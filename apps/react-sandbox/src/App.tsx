import React from "react";
import "./App.css";
import TodoContainer from "./Todo";
import TodoProvider from "./TodoProvider";
import Autocomplete from "./Autocomplete";

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
