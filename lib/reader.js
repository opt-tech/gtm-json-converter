exports.read = json => {
  const container = json.containerVersion
  const info = {
    ...container.container,
    exportTime: json.exportTime,
  }
  const tags = container.tag
  const triggers = container.trigger
  const variables = container.variable
  const builtInVariables = container.builtInVariable

  const ALL_PAGES = {
    triggerId: '2147479553',
    name: 'All Pages',
    filter: [{ type: '', parameter: [{ key: 'arg0', value: 'すべてのページ' }] }],
  }

  triggers.push(ALL_PAGES)

  function getTriggerById(id) {
    return triggers.find(item => item.triggerId === id)
  }

  function getFilterText(trigger) {
    const arr = [trigger.type]
    if (Array.isArray(trigger.filter)) {
      trigger.filter.forEach(item => {
        const [arg0, ...args] = item.parameter.map(p => p.value)
        arr.push([arg0, item.type, ...args].join(' '))
      })
    }
    return arr.join('\n')
  }

  triggers.forEach(trigger => {
    trigger.filterText = getFilterText(trigger)
    trigger.description = `${trigger.name}\n${trigger.filterText.replace(/^/gm, '  ')}`
  })

  tags.forEach(tag => {
    tag.firingTriggers = tag.firingTriggerId.map(getTriggerById)
  })

  return {
    info,
    tags,
    triggers,
    variables,
    builtInVariables,
  }
}
