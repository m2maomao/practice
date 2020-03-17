// let hello: string = 'Hello TypeScript'
// document.querySelectorAll('.app')[0].innerHTML = hello

import React from 'react'
import ReactDOM from 'react-dom'
import Hello from './component/demo/Hello'

ReactDOM.render(
    <Hello name="Michael!!!" />,
    document.querySelectorAll('.app')[0]
)