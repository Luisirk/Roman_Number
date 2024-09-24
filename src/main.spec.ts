import {expect} from "vitest";
import {add} from "./main";

describe("Default test", () => {
  it("returns I when expression is 1", () => {
    expect(add("1")).toBe('I')
  });
  it("returns II when expression is 2", () => {
    expect(add("2")).toBe('II')
  });
});
