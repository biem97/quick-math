export const MAX_VALUE = 10;
export const MIN_VALUE = 1;

interface PreviousGameState {
  firstValue: number;
  secondValue: number;
  sum: number;
}

export const generateRandomDifferentValue = (): number => {
  const differentValue = Math.floor(Math.random() * 4) - 2;

  if (differentValue === 0) {
    return 1;
  }

  return differentValue;
};

export const generateRandomNumber = (): number =>
  Math.floor(Math.random() * MAX_VALUE) + MIN_VALUE;

export const generateRandomBoolean = (): boolean => Math.random() <= 0.5;

export const generateEquation = (previousGame?: PreviousGameState) => {
  let firstValue = generateRandomNumber();
  let secondValue = generateRandomNumber();
  const shouldBeFalsyEquation = generateRandomBoolean();

  let sum = firstValue + secondValue;

  if (shouldBeFalsyEquation) {
    const differentialValue = generateRandomDifferentValue();
    sum += differentialValue;
  }

  if (!previousGame) {
    return {
      firstValue,
      secondValue,
      sum,
    };
  }

  if (firstValue === previousGame.firstValue) {
    firstValue += generateRandomDifferentValue();
  }

  if (secondValue === previousGame.secondValue) {
    secondValue += generateRandomDifferentValue();
  }

  sum = firstValue + secondValue;

  if (shouldBeFalsyEquation) {
    const differentialValue = generateRandomDifferentValue();
    sum += differentialValue;
  }

  return {
    firstValue,
    secondValue,
    sum,
  };
};
