# eslint-config-netflix

See ESLint docs on [flat configuration](https://eslint.org/docs/latest/use/configure/configuration-files-new)

```sh
npm install --save-dev @Netflix/eslint-config-netflix
npm test
```

Philosophy:
* Aim to enforce rules which reduce syntax related software bugs
* Adopt rules that steer developers away from outdated language features (e.g. `no-var`)
* Avoid the temptation to enforce stylistic preferences; integrators should do this locally
* Be more useful than `js.configs.recommended.rules`

---

Example usage:

```js
import globals from 'globals';
import NetflixCommon from '@Netflix/eslint-config-netflix';

export default [
  {
    files: ['**/*.js'],
    languageOptions: { globals: globals.browser },
    ...NetflixCommon,
  },
  {
    ignores: ['node_modules'],
  },
];
```
