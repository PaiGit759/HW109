import { difference, division } from "./functions.js";

test("testing difference", () => {
  expect(difference(13, 4)).toBe(9);
});

test("testing division", () => {
  expect(division(36, 4)).toBe(9);
});

test("testing division", () => {
  expect(division(36, 4)).not.toBe(19);
});
