import React,{Component} from 'react';
import ReactDOM from 'react-dom';

import Nav from 'nav/Nav.js';
import CardWrap from 'cardWrap/CardWrap.js'

require('../semantic/dist/semantic.css');
require('./common/style/main.css');



ReactDOM.render(
  <div className="ui container">
    <div className="ui dividing"></div>
    <Nav />
    <CardWrap />
  </div>,
  document.getElementById('root')
);

if(module.hot) {
  module.hot.accept()
}
