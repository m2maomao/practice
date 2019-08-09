import React,{Component} from 'react';
import ReactDOM from 'react-dom';

require('../semantic/dist/semantic.css');
require('./common/style/main.css');

class Nav extends React.Component{
  render(){
    return (
      <div className="ui menu">
        <div className="item">Noods</div>
        <div className="item">Home</div>
        <div className="item">List</div>
      </div>
    )
  }
}

class Body extends React.Component {
  render() {
    return (
      <img src={require('./common/img/128H.jpg')} alt="" className="img"/>
    )
  }
}

ReactDOM.render(
  <div className="ui container">
    <div className="ui dividing"></div>
    <Nav />
    <Body />
  </div>,
  document.getElementById('root')
);

if(module.hot) {
  module.hot.accept()
}
