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

class Card extends React.Component {
  render() {
    return (
      <div className="ui card">
        <div className="image">
          <img src={require('./common/img/matthew.png')} alt="" />
        </div>
        <div className="content">
          <div className="header">Matt</div>
          <div className="meta">
            <a href="">Friends</a>
          </div>
          <div className="description">Matthew</div>
        </div>
        <div className="extra content">
          <span className="right floated">Joined in 2013</span>
          <span><i className="empty heart icon"></i> 75 like</span>
        </div>
      </div>
    )
  }
}

class CardWrap extends React.Component {
  render(){
    return (
      <div className="ui cards">
        <Card />
        <Card />
        <Card />
        <Card />
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
    <CardWrap />
  </div>,
  document.getElementById('root')
);

if(module.hot) {
  module.hot.accept()
}
