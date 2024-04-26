# Publishing

We use GitHub Actions to publish new versions of this repository from tags. In
general, this includes some prepublish steps like updating versions in various
`*.json` files, committing those changes, and tagging the resulting commit.
These steps can be done manually, or via the `bump` script. Follow whichever
procedure feels more comfortable. By publishing, the “Publish” GitHub Action
workflow will be triggered and if all the tests pass, it’ll publish to all the
registries we care about.

Before you start — make sure you are on the `main` branch and up to date.
E.g., by running `git checkout main && git pull origin main`.

## Publishing with Manual Prepublish

1. Edit `package.json` and `deno.json` files to set the new version.
2. Run `npm install` to derive `package-lock.json` using the new version.
3. Commit the changed files. Follow the convention for the commit message.
   Example: `git commit --message="1.0.0-rc.57"`
4. Tag the commit using an annotated tag. Follow the convention with
   version _prefixed with a “v”_ and set the message to the new version.
   Example: `git tag --annotate "v1.0.0-rc.57" --message="1.0.0-rc.57"`
5. Push changes and tags using `git push origin main --follow-tags`.
6. Find [the tag you just pushed](https://github.com/Netflix/eslint-config-netflix/tags)
   in the GitHub UI and click the “Create release” option. Add any additional
   release information (including to check the box if it’s a “pre-release”).

## Publishing with Assisted Prepublish (`bump`)

1. Run `npm run bump` to view the current version. Then, run the same command
   and provide the version to bump to (e.g., `npm run bump 1.0.0-rc.57`). Note,
   keywords like `major`, `minor`, `patch`, etc. _are_ supported.
2. Push the new commit / tags by running `git push origin main --follow-tags`.
3. Find [the tag you just pushed](https://github.com/Netflix/eslint-config-netflix/tags)
   in the GitHub UI and click the “Create release” option. Add any additional
   release information (including to check the box if it’s a “pre-release”).
