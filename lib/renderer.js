function quote(text) {
  return `"${text.replace(/"/g, '""')}"`
}

function renderRow(row) {
  return row.map(quote).join(',')
}

exports.render = rows => {
  return rows.map(renderRow).join('\n') + '\n'
}
