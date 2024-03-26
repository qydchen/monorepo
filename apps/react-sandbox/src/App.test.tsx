import React from 'react';
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("renders todo component", () => {
  render(<App />);
  const todoElement = screen.getByText("Todo Component");
  expect(todoElement).toBeInTheDocument();
});

test("adds todo correctly", async () => {
  render(<App />);
  const todoInput = (await screen.findByPlaceholderText(
    "Add todo"
  )) as HTMLInputElement;
  fireEvent.change(todoInput, { target: { value: "hello" } });
  expect(todoInput.value).toBe("hello");
  fireEvent.click(screen.getByTestId("todo-form-submit"));
  const createdTodo = screen.getByText("hello");
  expect(createdTodo).toBeInTheDocument();
});