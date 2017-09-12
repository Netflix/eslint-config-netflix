const createTestLint = require('testlint')

const baseESLintConfig = {
  useEslintrc: false,
  configFile: 'index.js'
}

const cliEngineOptionsCreator = () =>  
  [
    baseESLintConfig
  ]

const testLint = createTestLint(cliEngineOptionsCreator)

module.exports = testLint
