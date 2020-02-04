import React,{Component} from 'react';

export default class Card extends Component {
    render(){
        return (
            <div className="ui card">
                <div className="image">
                    <img src={require('img/matthew.png')} alt=""/>
                </div>
                <div className="content">
                    <div className="header">Matt</div>
                    <div className="meta">
                        <a href="">Friends</a>
                    </div>
                    <div className="description">Matthew</div>
                </div>
                <div className="extra content">
                    <span>Joined in 2013</span>
                    <span>
                        <i className="empty heart icon"></i>75 Like
                    </span>
                </div>
            </div>
        )
    }
}