import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import EndMenu from "./EndMenu";

describe("EndMenu", () => {
  it("exists", () => {
    expect(EndMenu).toBeDefined();
  });

  it("has correct values", () => {
    render(<EndMenu />);

    expect(screen.getByText("Current")).toBeInTheDocument();
    screen.debug();
  });
});
