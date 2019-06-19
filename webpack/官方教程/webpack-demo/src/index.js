import {cube} from './math.js'

function component() {
  var elment = document.createElement('pre')

  element.innerHTML = [
    'Hello webpack!',
    '5 cubed is equal to ' + cube(5)
  ].join('\n\n')
  
  return element
}

document.body.appendChild(component())
