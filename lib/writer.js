const fs = require('fs')
const path = require('path')

const BOM = '\ufeff'

exports.getFileName = info => {
  return `[${info.name}] ${info.exportTime}.csv`
}

exports.write = async ({ data, outputFileName }) => {
  data = BOM + data.replace(/(?=\n)/g, '\r')
  return new Promise((resolve, reject) => {
    fs.writeFile(outputFileName, data, err => {
      err ? reject(err) : resolve(outputFileName)
    })
  })
}
