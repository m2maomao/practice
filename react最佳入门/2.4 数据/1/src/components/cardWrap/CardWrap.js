import React,{Component} from 'react';
import Card from 'card/Card.js'

export default class CardWrap extends Component {
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
