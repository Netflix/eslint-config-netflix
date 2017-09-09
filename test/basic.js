const config = require('../')
const test = require('tape')

test('test basic properties of config', t => {
  t.equal(config.parser, 'babel-eslint')
  t.ok(isObject(config.parserOptions))
  t.ok(isObject(config.rules))
  t.end()
})

function isObject (obj) {
  return typeof obj === 'object' && obj !== null
}
