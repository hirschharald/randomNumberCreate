export const randomNumber = (digits: number): number => {
  const number = Math.floor(Math.random() * 10 ** digits);
  return number;
};
console.log(randomNumber(4));
