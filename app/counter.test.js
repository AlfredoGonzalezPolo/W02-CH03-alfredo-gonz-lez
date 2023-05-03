import { handleDecrementButton } from "./counter";

describe("Given a handleDecrementButton function", () => {
  describe("When it receives 'click' and value", () => {
    test("Then it should return value - 1", () => {
      let click = true;
      const value = 2;

      const expectedValue = value - 1;
      click = handleDecrementButton();

      expect(click).toBe(expectedValue);
    });
  });
});
