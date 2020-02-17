import React from "react";
import { render } from "@testing-library/react";
import { NumberDisplay } from "./Calculator";

describe("Calculator Module", () => {
  let component;

  describe("Number Display", () => {
    beforeEach(() => {
      component = render(<NumberDisplay value={1023} />);
    });

    test("it renders the display tag", () => {
      expect(component.getByTestId("number-display")).toBeInTheDocument();
    });

    test("sets the passed value", () => {
      expect(component.getByText("1023")).toBeInTheDocument();
    });
  });
});
