import React, {Component} from 'react';
import ReactDOM from 'react-dom';

require('./common/style/main.css');

let w1 = 'Hello',
    w2 = 'World';

let sp = <span>World!</span>

ReactDOM.render(
    <div> {w1} {sp}</div>,
    document.getElementById('root')
);

if(module.hot) {
    module.hot.accept();
}