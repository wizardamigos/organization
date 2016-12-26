var belmark = require('belmark')

module.exports = slidez

function slidez (markdown, { seperator = '---' } = {}) {
  return (markdown+'').split(seperator).map(s => belmark(s))
}
