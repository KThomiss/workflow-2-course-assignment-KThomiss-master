import { getDiscountPercentage } from "./question-3";
import { formatDecimalSpaces } from "./question-3";
import { convertKrone } from "./question-3";
import { calculateTax } from "./question-3";

test("discount percentage works", function () {
  expect(getDiscountPercentage(100, 75)).toBe(25);
});

test("formating to the right number of decimals", () => {
  expect(formatDecimalSpaces(15.5555555, 2)).toBe(15.56);
});

test("converting to or from Krone", function () {
  convertKrone(10, true, 10.18);
  expect(formatDecimalSpaces(10 * 10.18)).toBe(101.8);
  expect(formatDecimalSpaces(10 / 10.18)).toBe(0.98);
});

test("calculating tax", () => {
  calculateTax(100, 25);
  expect(formatDecimalSpaces(100 + 100 * (25 / 100))).toBe(125);
});
