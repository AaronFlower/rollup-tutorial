import {sayHelloTo} from './modules/say'
import sumArray from './modules/sum'

import debug from 'debug'

import '../styles/main.css'

const log = debug('app:log')

if (ENV !== 'production') {
  debug.enable('*')
  log('Logging is enabled!')
  document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] +
  ':7080/livereload.js?snipver=1"></' + 'script>')
} else {
  debug.disable()
}
 
const hiEason = sayHelloTo('Eason')
const sumFab = sumArray([1, 1, 2, 3, 5, 8, 13])

let content = document.getElementById('content')

content.innerHTML = `
  <pre>
  <code>
    sayHelloTo('Eason') : ${hiEason}
    sumArray([1, 1, 2, 3, 5, 8, 13]): ${sumFab}
  </code>
  </pre>
`