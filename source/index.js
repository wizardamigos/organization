// @TODO: should be passed in as argument
var DATA = require('fs').readFileSync(__dirname + '/slides/taiwan.md')
// @TODO: slidez component => can also generate html as cli
var slidez = require('./slidez')

var bel    = require('bel')
var csjs   = require('csjs-inject')

var css = csjs`
  .slides {
    background-color: red;
  }
`
var slides = slidez(DATA)
var container = bel`<div class="${css.classname}"><div></div></div>`
document.body.appendChild(container)

var focus = 0
navigate()


document.addEventListener('keydown', function (event) {
  if (event.which === 37) return goLeft()
  if (event.which === 39) return goRight()
  if (event.which === 38) return console.log('<UP>')
  if (event.which === 40) return console.log('<DOWN>')
})

function navigate () {
  var current = container.childNodes[0]
  console.log(current)
  var next = slides[focus]
  console.log(next)
  current.replaceWith(next)
  console.log(slides[0])
  console.log(slides[1])
  console.log(slides[2])
  console.log('yay')
}
function goLeft () {
  focus -= 1
  if (focus < 0) return focus = 0
  navigate()
}
function goRight () {
  focus += 1
  if (focus >= slides.length) return focus = slides.length - 1
  navigate()
}
