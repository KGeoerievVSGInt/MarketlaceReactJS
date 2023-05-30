export const numbersToArr = (num: number | string) => {
  const result = [];
  for (let i = 0; i < Number(num); i++) {
    result.push(i);
  }
  return result;
};
