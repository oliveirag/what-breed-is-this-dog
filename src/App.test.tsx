import React from "react";
import { render, screen } from "@testing-library/react";
import { App } from "./App";

test("renders initial state", () => {
  render(<App />, {});
  const appLogo = screen.getByTestId("app-logo");
  const uploadButton = screen.getByText(/upload image/i);
  expect(uploadButton).toBeInTheDocument();
  expect(appLogo).toBeInTheDocument();
});
