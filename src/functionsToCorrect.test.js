import { timeOfDay, getShoppingListByNum } from "./functionsToCorrect.js";

for (let hours = 0; hours < 24; hours++) {
  const Day = new Date(0, 0, 0, hours);

  if (hours >= 0 && hours <= 5) {
    test("hours >= 0 && hours <= 5", () => {
      expect(timeOfDay(Day)).toBe("night");
      //    console.log(hours, "night");
    });
  } else if (hours > 5 && hours <= 11) {
    test("hours > 5 && hours <= 11", () => {
      expect(timeOfDay(Day)).toBe("morning");
      //    console.log(hours, "morning");
    });
  } else if (hours > 11 && hours <= 17) {
    test("hours > 11 && hours <= 17", () => {
      expect(timeOfDay(Day)).toBe("day");
      //    console.log(hours, "day");
    });
  } else {
    test("hours > 17 && hours <= 23", () => {
      expect(timeOfDay(Day)).toBe("evening");
      //     console.log(hours, "evening");
    });
  }
}

test("if is not date", () => {
  expect(timeOfDay("2022-12-03")).toBe("This is not date");
  // console.log("This is not date");
});

// ошибок нет
for (let i = 0; i < 3; i++) {
  //for (let i = 0; i < 4; i++) { // выдает ошибку т.к. недопустимое значение номера списка

  let shoppingList = getShoppingListByNum(i);

  test("the shopping list has milk on it if 0=<i<3 ", () => {
    expect(shoppingList).toContain("milk");
    expect(new Set(shoppingList)).toContain("milk");
  });
}

test("the shopping list is >2 ", () => {
  expect(getShoppingListByNum(5)).toBe("This is errow");
  //  expect(new Set(shoppingList)).toContain("This is errow");
});

test("the shopping list  is not a namber", () => {
  expect(getShoppingListByNum("d")).toBe("This is errow");
});
