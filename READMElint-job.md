## Set up

Check TypeScript first: `npx tsc --version` must say 6.x. typescript-eslint does not work with TypeScript 7 yet.

```
npm install --save-dev eslint @eslint/js typescript-eslint
```

Create a file called `eslint.config.mjs` in the root of your repo, with this content:

```js
// @ts-check
import js from "@eslint/js";
import { defineConfig, globalIgnores } from "eslint/config";
import tseslint from "typescript-eslint";

export default defineConfig(
  globalIgnores(["dist/"]),
  {
    files: ["**/*.ts"],
    extends: [js.configs.recommended, tseslint.configs.recommended],
    rules: {
      eqeqeq: "error",
    },
  },
  {
    // the typeChecks() functions at the bottom of the test files are never called, on purpose
    files: ["**/*.test.ts"],
    rules: {
      "@typescript-eslint/no-unused-vars": "off",
    },
  },
);
```

- add to `scripts` in `package.json`: `"lint": "eslint ."` and `"lint:fix": "eslint . --fix"`
- add the job from `lint-job.yml` to your PR Checks workflow
- commit `package.json` and `package-lock.json` as well, CI runs `npm ci`

```
npm run lint
```

It will also complain about your older exercises. Good.

## The work

1. Push the setup and nothing else. The lint job is red. Open the Files changed tab of the pull request: the findings sit on the lines.

Rules:

- change the code, not `eslint.config.mjs`
- `npm run lint:fix` is fine, but read the diff before you commit it
- if you think a finding is wrong, keep the code and switch the rule off for that one line, with the reason: `// eslint-disable-next-line <rule> -- why`. I will ask about it.
