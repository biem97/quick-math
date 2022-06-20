import { describe, it, expect, vi } from "vitest";
import {
  MAX_VALUE,
  MIN_VALUE,
  TIMEOUT_DURATION,
  RANDOM_BOOLEAN_ODD,
  initializeGame,
  generateNextGame,
} from "./game";

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

describe("TIMEOUT_DURATION", () => {
  it("exists", () => {
    expect(TIMEOUT_DURATION).toBeDefined();
  });

  it("has correct values", () => {
    expect(TIMEOUT_DURATION).toBe(1500);
  });
});

describe("RANDOM_BOOLEAN_ODD", () => {
  it("exists", () => {
    expect(RANDOM_BOOLEAN_ODD).toBeDefined();
  });

  it("has correct values", () => {
    expect(RANDOM_BOOLEAN_ODD).toBe(0.5);
  });
});

describe("initializeGame", () => {
  it("exists", () => {
    expect(initializeGame).toBeDefined();
  });

  it("generates correct game state", () => {
    const game = initializeGame();

    expect(game.firstValue).toBeTypeOf("number");
    expect(game.secondValue).toBeTypeOf("number");
    expect(game.sum).toBeTypeOf("number");
    expect(game.score).toEqual(0);
    expect(game.timeoutDuration).toEqual(TIMEOUT_DURATION);
    expect(game.gameStatus).toBe("HOME");
  });
});

describe("generateNextGame", () => {
  it("exists", () => {
    expect(generateNextGame).toBeDefined();
  });

  it("has correct values if the equation is correct", () => {
    const game = initializeGame();
    const nextGame = generateNextGame(game);

    expect(nextGame.firstValue).toBeTypeOf("number");
    expect(nextGame.secondValue).toBeTypeOf("number");
    expect(nextGame.sum).toBeTypeOf("number");
    expect(nextGame.score).toEqual(1);
    expect(nextGame.timeoutDuration).toEqual(TIMEOUT_DURATION);
    expect(nextGame.gameStatus).toBe("PLAYING");
  });
});
