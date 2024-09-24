import {expect} from "vitest";
import {add} from "./main";

describe("Default test", () => {
  it("returns I when expression is 1", () => {
    expect(add("1")).toBe('I')
  });
  it("returns V when expression is 5", () => {
    expect(add("5")).toBe('V')
  });
  it("returns X when expression is 10", () => {
    expect(add("10")).toBe('X')
  });
  it("returns L when expression is 50", () => {
    expect(add("50")).toBe('L')
  });
  it("returns L when expression is 50", () => {
    expect(add("100")).toBe('C')
  });
  it("returns L when expression is 500", () => {
    expect(add("500")).toBe('D')
  });
  it("returns M when expression is 1000", () => {
    expect(add("1000")).toBe('M')
  });
  it("returns II when expression is 2", () => {
    expect(add("2")).toBe('II')
  });

});
