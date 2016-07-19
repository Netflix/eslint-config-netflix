# eslint-config-netflix

[Shared ESLint config](http://eslint.org/docs/developer-guide/shareable-configs) for JavaScript code produced by Netflix's Data Engineering and Analysis group but designed to be usable across the company. By adopting a common ESLint config, we hope to encourage consistent style and quality across all of our repos.

The lion's share of ESLint configuration should be defined here rather than each project's own `.eslintrc`. If a project's maintainers want to override some configuration value, they can do it in their own `.eslintrc`.

## Usage

```sh
npm install --save-dev eslint-config-netflix
```

Then, extend `netflix` in your `.eslintrc`:

```json
{
  "extends": "netflix"
}
```

## A Note on Dependencies
*eslint-config-netflix* has *babel-eslint* and *eslint* as peer deps because it relies on recent versions of those packages for ES2015 support. 
