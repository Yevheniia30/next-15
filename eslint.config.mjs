import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
});
const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "no-multiple-empty-lines": ["error", {
        max: 1,
        maxEOF: 0,
        maxBOF: 0
      }],
      "padding-line-between-statements": [
        "error",
        { blankLine: "never", prev: "*", next: "return" }
      ]
    }
  }
];
export default eslintConfig;
