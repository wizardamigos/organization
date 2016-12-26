var belmark = require('belmark')

module.exports = slidez

function slidez (markdown, seperator = '---') {
  var slides = (markdown+'').split(seperator)
  return slides.map(belmark)

}
