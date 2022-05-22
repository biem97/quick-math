import { MAX_SUM, MIN_SUM } from "./constants";

export const generateRandomSum = (): number =>
  Math.floor(Math.random() * MAX_SUM) + MIN_SUM;

export const generateRandomBoolean = (): boolean => Math.random() <= 0.5;

export const generateTwoValue = (
  sum: number,
  shouldBeFalsy: boolean
): [number, number] => {
  let firstValue: number = Math.floor(sum / 2);
  let secondValue: number = sum - firstValue;

  if (shouldBeFalsy) {
    console.log("hello");
    secondValue -= 1;
  }

  return [firstValue, secondValue];
};
