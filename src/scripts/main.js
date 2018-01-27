import {sayHelloTo} from './modules/say'
import sumArray from './modules/sum'

import debug from 'debug'

const log = debug('app:log')

if (ENV !== 'production') {
  debug.enable('*')
  log('Logging is enabled!')
} else {
  debug.disable()
}

const hiEason = sayHelloTo('Eason')
const sumFab = sumArray([1, 1, 2, 3, 5, 8, 13])

let content = document.getElementById('content')

content.innerHTML = `
  <ul>
  <li>sayHelloTo('Eason') : ${hiEason}</li>
  <li>sumArray([1, 1, 2, 3, 5, 8, 13]): ${sumFab}</li>
  </ul>
`