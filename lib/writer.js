const fs = require('fs')
const path = require('path')
const dayjs = require('dayjs')
const sanitize = require('sanitize-filename')

const BOM = '\ufeff'

exports.getFileName = info => {
  const datetime = dayjs(info.exportTime).format('YYYY-MM-DD HHmmss')
  return sanitize(`[${info.name}] ${datetime}.csv`, { replacement: '_' })
}

exports.write = async ({ data, outputFileName }) => {
  data = BOM + data.replace(/(?=\n)/g, '\r')
  return new Promise((resolve, reject) => {
    fs.writeFile(outputFileName, data, err => {
      err ? reject(err) : resolve(outputFileName)
    })
  })
}
