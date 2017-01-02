 /* @TODO:
 	write a markdown2slides generator.
	1. use in watch mode to life preview while editing
	2. use to build index.html to publich as gh-page
	3. add features according to other presentation libraries
	4. author presentation in markdown as es6 template literal to inject custom data
	5. ....
  { e.g.
    "scripts": {
      "start": "reveal-md slides.md",
      "build": "reveal-md slides.md --static > index.html"
    }
  }
*/
var belmark = require('belmark')

module.exports = slidez

function slidez (markdown, { seperator = '---' } = {}) {
  return (markdown+'').split(seperator).map(s => belmark(s))
}
