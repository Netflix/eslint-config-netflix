# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Removed

- Rule removed: `array-callback-return`

## [3.0.0] - 2024-03-21

### Added

- Use ESLint flag configuration format
- Support for publishing to NPM / JSR via GitHub Actions.

### Changed

- ESLint upgraded
- Removed all other project dependencies
- Updated package name to “@netflix/eslint-config”

### Removed

- Dropped support for Babel

## [2.0.0] - 2017-09-08

### Added

- Support use with latest react-scripts

### Changed

- (fix) duplicate no-var removed

### Removed

- (feat) no-reclare added as an error

## [1.0.1] - 2017-04-12

### Fixed

- react's not a peer dep here

## [1.0.0] - 2017-04-12

### Added

- Final changes before “1.0.0” release (previously only “alpha” releases)
- various rule additions

### Changed

- Class methods much use this
- Template brackets in tem,plate strings only
  (to help catch typos and facillitate replacing
   older templating solutions)
- Encouraging arrow fns in callbacks
