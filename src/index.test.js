import { randomNumber } from "./index";

it("", () => {
  const digits = 4;
  const num = randomNumber(digits);
  expect(num).toBeGreaterThan(1 * 10 ** (digits - 1));
});
