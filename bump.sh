#!/bin/bash

# Wrapper around “npm version” which appends additional logic to also update the
#  “deno.json” file which controls how we publish to JSR.

# Exit upon any failure. I.e., make script strictly sequential.
set -e

# Print current version information.
npm version

# Bail if we don’t have a version string for some reason. This is not an error.
if [ -z "${1}" ]
then
  exit 0
fi

# Bump version in package.json using npm version itself. This ensures that we
#  stay anchored to first-class tooling. We pass “--git-tag-version=false” to
#  prevent the command from (1) committing changes and (2) creating a tag.
prefixed_version="$(npm version --git-tag-version=false "${1}")"

# The “npm version” command will return the value with a “v” prefix. Ditch that.
version="${prefixed_version:1}"

# Get pointers to files we need to manually update.
root_directory="$(dirname "$(realpath "${0}")")"
deno_json_file="${root_directory}/deno.json"
package_json_file="${root_directory}/package.json"
package_lock_json_file="${root_directory}/package-lock.json"

# Bump version in deno.json.
deno_json_find="\"version\": \"[^\"]*\""
deno_json_repl="\"version\": \"${version}\""
next_deno_json_file=$(sed "s/${deno_json_find}/${deno_json_repl}/g" "${deno_json_file}")
echo "updating \"${deno_json_file}\""
echo "${next_deno_json_file}" > "${deno_json_file}"

# Commit all our changes.
git add "${package_json_file}"
git add "${package_lock_json_file}"
git add "${deno_json_file}"
git commit --message="${version}"
git tag --annotate "v${version}" --message="${version}"
