#!/usr/bin/env node

const args = process.argv.slice(2)
const { write } = require('../lib/writer')

if (args.length < 1) {
  console.log('Usage:\n  gtm-json-converter {file}')
  process.exit()
}

const [input] = args
const res = require('..').convert(input)

write(res).then(
  filepath => {
    console.log(`Saved successfully: ${filepath}`)
  },
  err => {
    console.error(err)
  },
)
