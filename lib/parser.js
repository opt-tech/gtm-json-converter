function getValueByKey(list, key) {
  if (!Array.isArray(list)) {
    return '(Error)'
  }
  const item = list.find(item => item.key === key)
  return item && 'value' in item ? item.value : '(Error)'
}

function getTagCells(tag) {
  if (!(tag instanceof Object) || !Array.isArray(tag.parameter)) {
    return ['(Error)', '(Error)']
  }

  return tag.type === 'html'
    ? [
        getValueByKey(tag.parameter, 'html'),
        getValueByKey(tag.parameter, 'supportDocumentWrite') === 'true' ? 'サポートする' : '',
      ]
    : [tag.parameter.map(p => `${p.key}\n  ${p.value}`).join('\n'), '']
}

function getTriggerText(tag) {
  return tag.firingTriggers.map(t => t?.description).join('\n')
}

exports.parse = tags => {
  const header = ['ID', '名前', 'タグ', 'document.write', 'トリガー']
  const body = tags.map(t => [t.tagId, t.name, ...getTagCells(t), getTriggerText(t)])

  return [header, ...body]
}
