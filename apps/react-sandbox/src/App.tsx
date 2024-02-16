import React from "react";
import "./App.css";
import TodoContainer from "./Todo";
import TodoProvider from "./TodoProvider";

function App(): React.ReactElement {
  return (
    <div className="App">
      <TodoProvider>
        <TodoContainer />
      </TodoProvider>
    </div>
  );
}

export default App;
