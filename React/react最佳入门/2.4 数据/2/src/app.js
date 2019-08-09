import React,{Component} from 'react';
import ReactDOM from 'react-dom';

import Nav from 'nav/Nav.js';
import CardWrap from 'cardWrap/CardWrap.js';



require('../semantic/dist/semantic.css');
require('./common/style/main.css');

let data = [
  {
    imgSrc:require('img/matthew.png'),
    name:'Matt',
    meta:'Friends',
    desc:'Matthew is an interior designer living in New York.',
    joined:'2013',
    likeNum:'75'
  },
  {
    imgSrc:require('img/molly.png'),
    name:'Michael',
    meta:'Father',
    desc:'Michael is a personal assistant living in Paris.',
    joined:'2018',
    likeNum:'20312'
  },
  {
    imgSrc:require('img/elyse.png'),
    name:'Elyse',
    meta:'Coworker',
    desc:'Elyse is a copywriter working in New York.',
    joined:'2014',
    likeNum:'151'
  }
]

ReactDOM.render(
  <div className="ui container">
    <div className="ui dividing"></div>
    <Nav />
    <CardWrap data={data} />
  </div>,
  document.getElementById('root')
);

if(module.hot) {
  module.hot.accept()
}
