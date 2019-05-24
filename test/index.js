const path = require('path')
const { readFileSync } = require('fs')
const { convert } = require('..')

function assert(condition) {
  if (!condition) {
    throw new Error('Assertion failed')
  }
}

function getPath(name) {
  return path.join(__dirname, name)
}

const { outputFileName, data } = convert(getPath('test.json'))

assert(outputFileName === getPath('[example.com] 1970-01-01 010203.csv'))

const expected = readFileSync(getPath('test.csv'), 'utf-8')
  .slice(1)
  .replace(/\r\n/g, '\n')

assert(data === expected)

console.log('passed!')
