import type { NonEmptyString } from "type-fest";

export function codePoint0<T extends string>(string: NonEmptyString<T>): number {
  const codePoint = string.codePointAt(0);
  if (codePoint === undefined) {
    throw new Error("Expected a non-empty string with a code point at index 0");
  }
  return codePoint;
}
