import React, {Component} from 'react';
import ReactDOM from 'react-dom';



require('./common/style/main.css');

ReactDOM.render(
    <div>Hello React!!</div>,
    document.getElementById('root')
);

if(module.hot) {
    module.hot.accept();
}