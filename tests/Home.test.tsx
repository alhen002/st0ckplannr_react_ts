import { render, screen } from "@testing-library/react";
import Home from "../src/roots/Home";
import React from "react";

describe("Home", () => {
  test("renders headline", () => {
    render(<Home />);
    const headline = screen.getByText(
      /Home page, where we can login in buy asdfasdfasdf/i
    );
    expect(headline).toBeTruthy(); // use toBeTruthy instead of toBeInTheDocument
  });
});
