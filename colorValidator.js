function colorValidator(color) {
  const regex = /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/

  return regex.test(color)
}

module.exports = { colorValidator }
