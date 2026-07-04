# codepoint0

Return the first Unicode code point of a non-empty string.

## Install

```bash
npm install codepoint0
```

## Usage

```ts
import { codePoint0 } from "codepoint0";

codePoint0("a"); // 97
codePoint0("😀"); // 128512

// @ts-expect-error -- empty strings are rejected at compile time
codePoint0("");
```

The parameter type is based on `NonEmptyString` from [`type-fest`](https://www.npmjs.com/package/type-fest), bundled into this package's type declarations.

## License

MIT
