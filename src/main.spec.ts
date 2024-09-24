import {expect} from "vitest";
import {add} from "./main";

describe("Default test", () => {
  it("returns I when expression is 1", () => {
    expect(add("1")).toBe('I')

  });
});
