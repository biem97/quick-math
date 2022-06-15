import { describe, it, expect } from "vitest";
import { MAX_VALUE, MIN_VALUE, generateRandomBoolean } from "./game";

describe("MAX_VALUE", () => {
  it("exists", () => {
    expect(MAX_VALUE).toBeDefined();
  });

  it("has correct values", () => {
    expect(MAX_VALUE).toBe(10);
  });
});

describe("MIN_VALUE", () => {
  it("exists", () => {
    expect(MIN_VALUE).toBeDefined();
  });

  it("has correct values", () => {
    expect(MIN_VALUE).toBe(1);
  });
});

describe("generateRandomBoolean", () => {});
