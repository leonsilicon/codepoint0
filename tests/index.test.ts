import { expect, test } from "vite-plus/test";
import { codePoint0 } from "../src/index.ts";

test("returns the first code point of a string", () => {
  expect(codePoint0("a")).toBe(97);
  expect(codePoint0("😀")).toBe(0x1f600);
});

test("returns the first code point of a surrogate pair", () => {
  expect(codePoint0("𐍈")).toBe(0x10348);
});
