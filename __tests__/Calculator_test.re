open Jest;
open Expect;

open Calculator;

describe("Calculator", () => {
  test("should add three numbers", () => {
    expect(sum([2, 3, 3])) |> toBe(8)
  });
  test("should add four numbers", () => {
    expect(sum([2, 3, 3, 1])) |> toBe(9)
  });
});