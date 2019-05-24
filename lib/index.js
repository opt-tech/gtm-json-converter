const path = require('path')
const { read } = require('./reader')
const { parse } = require('./parser')
const { render } = require('./renderer')
const { getFileName } = require('./writer')

exports.convert = input => {
  input = path.resolve(input)

  const json = require(input)
  const { info, tags, triggers } = read(json)
  const data = render(parse(tags))
  const outputFileName = path.join(path.dirname(input), getFileName(info))

  return { data, outputFileName }
}
