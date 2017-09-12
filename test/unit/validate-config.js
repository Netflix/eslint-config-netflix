const test = require('../my-testlint')

test('load config in eslint to validate all rule syntax is correct',  
  'const foo = 1\nconst bar = function () { return \'bar\' }\nbar(foo)\n',
  (execution, t) => {
    t.equal(execution.errorCount, 0)
    t.end()
  })

test('functions should not be empty',  
  'const foo = 1\nconst bar = function () { }\nbar(foo)\n',
  (execution, t) => {
    t.equal(execution.errorCount, 1)
    t.equal(execution.results[0].messages[0].ruleId, 'no-empty-function')

    t.end()
  })

test('object rest spread can be used to functionally omit fields preceding the ellipsis', 
  'const foo = { a: 97, b: 98, c: 99 }\nconst { a, ...charCodes } = foo\nconsole.log(charCodes)\n',
  (execution, t) => {
    t.equal(execution.errorCount, 0)

    t.end()
  })

test('desctructuring assignment results in values that must be used if not preceding a "rest" operation',
  'const foo = { a: 97, b: 98, c: 99 }\nconst { a, b, c } = foo\nconsole.log(a, c)\n',
  (execution, t) => {
    t.equal(execution.errorCount, 1)
    t.equal(execution.results[0].messages[0].ruleId, 'no-unused-vars')

    t.end()
  })

