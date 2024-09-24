const MAX_VALUE = 500000;
const values: number[] = [
  1000,
  2000,
  5000,
  10000,
  20000,
  50000,
  100000,
  200000,
  MAX_VALUE,
];
export const suggestionByAmount = (amount: number) => {
  const result: number[] = [];
  const reverseValues: number[] = [...values].reverse();

  const value500k = Math.trunc(amount / MAX_VALUE);
  const residual = amount % MAX_VALUE;

  const divisor = Math.trunc(residual / 100000);

  reverseValues.forEach((item) => {
    if (residual <= item) {
      result.push(item);
    } else if (divisor * 100000 <= item || divisor * 100000 >= 200000) {
      const res = divisor * 100000;
      values
        .filter((i) => i < MAX_VALUE)
        .forEach((i) => {
          if (res + i >= residual) {
            if (res + i === 300000 && residual <= 200000) {
            } else {
              result.push(res + i);
            }
          }
        });
    }
  });

  return [
    ...new Set([amount, ...result.map((item) => item + value500k * MAX_VALUE)]),
  ].sort((a, b) => a - b);
};

export const suggestionByInput = (input: number) => {
  const result: number[] = [];

  let currentNumber = input;

  while (result.length < 5) {
    currentNumber = currentNumber * 10;
    if (Math.trunc(currentNumber / 1000) > 0) {
      result.push(currentNumber);
    }
  }

  return result;
};
